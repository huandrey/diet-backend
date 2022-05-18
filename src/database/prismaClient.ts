/* eslint-disable import/prefer-default-export */
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export { prismaClient };
