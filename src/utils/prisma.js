import { PrismaClient } from "@prisma/client";

// Avoid instantiating too many instances of Prisma in development
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#problem
let prisma;
if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!prisma) {
      prisma = new PrismaClient();
    }
    prisma = prisma;
  }
}

export default prisma;
