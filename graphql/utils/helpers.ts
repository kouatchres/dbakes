import { ApolloError } from 'apollo-server-micro';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { createTransport } from 'nodemailer';
import { APP_SECRET, Errors, errors, tokens } from './constants';

export const handleError = (error: any) => {
  // add any other logging mechanism here e.g. Sentry
  throw error;
};

export const returnError = (error: keyof Errors) => {
  return errors[error];
};

export const generateAccessToken = (userId: number) => {
  const accessToken = sign(
    {
      userId,
      type: tokens.access.name,
      timestamp: Date.now()
    },
    APP_SECRET,
    {
      expiresIn: tokens.access.expiry
    }
  );
  return accessToken;
};

type Token = string;

const transport = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

export default {
  activationEmail(token: Token) {
    // Compose email
    const html = `Hi there,
      <br/>
      Thank you for registering!
      <br/><br/>
      Please verify your email by clicking the following link:
      <br/>
      On the following page:
      <a target="_blank" href="${process.env.CLIENT_URL}/auth/activate/${token}">${process.env.CLIENT_URL}/auth/activate/${token}</a>
      <br/><br/>
      Have a pleasant day.`;
    return html;
  },
  resetPassword(token: Token) {
    const html = `
    <h1>Please use the following link to reset your password</h1>
    <a target="_blank" href="${process.env.CLIENT_URL}/auth/password/reset/${token}">${process.env.CLIENT_URL}/auth/password/reset/${token}</a>
    `;
    return html;
  },
  sendEmail(from: string, to: string, subject: string, html: string) {
    return new Promise((resolve, reject) => {
      transport.sendMail({ from, subject, to, html }, (err, info) => {
        if (err) reject(err);
        resolve(info);
      });
    });
  }
};

export const generateHashPassword = (password: string | Buffer) => {
  if (password.length < 5) {
    throw new ApolloError('Password should be greater than 8 characters');
  }
  return hash(password, 10);
};

// export const prisma = new PrismaClient();

// export const createContext = (ctx: any): Context => {
//   let userId: number;
//   try {
//     let Authorization = '';
//     try {
//       // for queries and mutations
//       Authorization = ctx.req.get('Authorization');
//     } catch (e) {
//       // specifically for subscriptions as the above will fail
//       Authorization = ctx?.connection?.context?.Authorization;
//     }
//     const token = Authorization.replace('Bearer ', '');
//     const verifiedToken = verify(token, APP_SECRET) as Token;

//     if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name)
//       userId = -1;
//     else userId = verifiedToken.userId;
//   } catch (e) {
//     userId = -1;
//   }
//   return {
//     ...ctx,
//     prisma,
//     userId
//   };
// };
