// src/services/chatService.ts
import { PrismaService } from '@/lib/prisma';
const PRISMA_CLIENT = new PrismaService();

export async function getAllChats() {
  try {
    return await PRISMA_CLIENT.chat.findMany();
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao buscar chats');
  }
}

export async function createChat(mensagem: string) {
  try {
    return await PRISMA_CLIENT.chat.create({
      data: {
        mensagem,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao criar chat');
  }
}
