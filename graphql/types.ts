// import { IncomingMessage } from 'http'

// export interface Context {
//   prisma: PrismaClient;
//   req: Request;
//   res: Response;
//   userId: string;
// }

// export interface SocketContext {
//   prisma: PrismaClient
//   req: IncomingMessage
//   pubsub: PubSub
// }

export interface Token {
  userId: string;
  type: string;
  timestamp: number;
}
