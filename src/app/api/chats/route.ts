import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma: PrismaClient = new PrismaClient();

// Rota GET para buscar os chats
export async function GET() {
  try {
    const chats = await prisma.chat.findMany();
    if (!chats.length) {
      return NextResponse.json({ error: 'Nenhum chat encontrado' }, { status: 404 });
    }
    return NextResponse.json(chats);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao buscar chats' }, { status: 500 });
  }
}

// Rota POST para criar um novo chat
export async function POST(req: Request) {
  try {
    const { mensagem } = await req.json();

    if (!mensagem) {
      return NextResponse.json({ error: 'mensagem é obrigatória' }, { status: 400 });
    }

    const newChat = await prisma.chat.create({
      data: {
        mensagem,
      },
    });

    return NextResponse.json(newChat, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao criar chat' }, { status: 500 });
  }
}
