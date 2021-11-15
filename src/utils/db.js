import prisma from "./prisma";

const createUser = (email, password) => {};

export const getUser = async (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};
