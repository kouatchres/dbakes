import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
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

const createContext = (context: Context) => {
  return {
    ...context,
    prisma
    // userId
  };
};
export default createContext;
