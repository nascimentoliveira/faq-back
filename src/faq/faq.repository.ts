import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Question } from '@prisma/client';
import { CreateQuestion } from './dto/create-question.dto';
import { QuestionDTO } from './dto/question.dto';

@Injectable()
export class FaqRepository {
  constructor(private readonly prisma: PrismaService) { }

  async getAll(): Promise<Question[]> {
    return await this.prisma.question.findMany();
  }

  async get(id: number): Promise<Question[] | null> {
    return this.prisma.question.findMany({
      where: {
        OR: [{ id }, { parent_question_id: id }],
      },
    });
  }

  async getById(id: number): Promise<Question | null> {
    return this.prisma.question.findUnique({
      where: { id },
    });
  }

  async create(data: CreateQuestion): Promise<Question> {
    return this.prisma.question.create({ data });
  }

  async update(questionId: number, data: QuestionDTO): Promise<Question> {
    return this.prisma.question.update({
      where: { id: questionId },
      data,
    });
  }

  async delete(id: number): Promise<Question> {
    return this.prisma.question.delete({
      where: { id },
    });
  }

  async getMaxOrderOfChildren(parentId: number): Promise<number> {
    const result = await this.prisma.question.findFirst({
      where: {
        parent_question_id: parentId,
      },
      select: {
        order: true,
      },
      orderBy: {
        order: 'desc',
      },
    });

    return result ? result.order : 0;
  }
}
