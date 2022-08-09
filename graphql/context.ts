import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { tokens } from './utils/constants';
require('dotenv').config({ path: '../.env' });

let prisma: PrismaClient;

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  userId: string;
}

export interface Token {
  userId: string;
  type: string;
  timestamp: number;
}
export const createContext = (ctx: any): Context => {
  let userId: string;

  try {
    let Authorization = '';
    try {
      // for queries and mutations
      Authorization = ctx.req.get('Authorization');
    } catch (e) {
      // specifically for subscriptions as the above will fail
      Authorization = ctx?.connection?.context?.Authorization;
    }
    // const token = Authorization.split('')[1];
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = jwt.verify(token, 'syginexseecret') as Token;
    // const verifiedToken = jwt.verify(token, process.env.APP_SECRET!) as Token;
    console.log({ verifiedToken });
    if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name)
      // if (!verifiedToken.userId)
      userId = '';
    else userId = verifiedToken.userId;
  } catch (e) {
    userId = '';
  }
  return {
    ...ctx,
    prisma,
    userId
  };
};
