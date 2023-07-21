import { Injectable, NotFoundException } from '@nestjs/common';
import { Question } from '@prisma/client';
import { FaqRepository } from './faq.repository';
import { QuestionWithSubquestions } from './model/question.model';
import { QuestionDTO } from './dto/question.dto';

@Injectable()
export class FaqService {
  constructor(private readonly faqRepository: FaqRepository) { }

  async getAll(): Promise<QuestionWithSubquestions[]> {
    const questions: Question[] = await this.faqRepository.getAll();
    return this.buildQuestionTree(questions, null);
  }

  async getById(id: number): Promise<QuestionWithSubquestions[]> {
    const question: Question = await this.checkQuestionExists(id);
    const questions: Question[] = await this.faqRepository.get(id);
    return this.buildQuestionTree(questions, question.parent_question_id);
  }

  async createParent(data: QuestionDTO): Promise<Question> {
    const maxOrder: number = await this.getMaxOrderOfChildren(null);
    return this.faqRepository.create({
      ...data,
      parent_question_id: null,
      order: maxOrder + 1,
    });
  }

  async createSubquestion(
    parentId: number,
    data: QuestionDTO,
  ): Promise<Question> {
    this.checkQuestionExists(parentId);
    const maxOrder: number = await this.getMaxOrderOfChildren(parentId);
    return this.faqRepository.create({
      ...data,
      parent_question_id: parentId,
      order: maxOrder + 1,
    });
  }

  async update(id: number, data: QuestionDTO): Promise<Question> {
    await this.checkQuestionExists(id);
    return this.faqRepository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    await this.checkQuestionExists(id);
    await this.deleteChildren(id)
    return this.faqRepository.delete(id);
  }

  private buildQuestionTree(
    questions: Question[],
    parentId: number | null,
  ): QuestionWithSubquestions[] {
    const tree = [];
    for (const question of questions) {
      if (question.parent_question_id === parentId) {
        const subquestions = this.buildQuestionTree(questions, question.id);
        const questionWithSubquestions = {
          ...question,
          subquestions: subquestions.length > 0 ? subquestions : null,
        };
        tree.push(questionWithSubquestions);
      }
    }
    return tree;
  }

  private async getMaxOrderOfChildren(parentId: number | null): Promise<number> {
    return this.faqRepository.getMaxOrderOfChildren(parentId);
  }

  private async checkQuestionExists(id: number): Promise<Question> {
    const existingQuestion: Question = await this.faqRepository.getById(id);
    if (!existingQuestion) {
      throw new NotFoundException(`Pergunta com ID ${id} não encontrada.`);
    }
    return existingQuestion;
  }

  private async deleteChildren(id: number): Promise<void> {
    const childQuestions = await this.faqRepository.findChildren(id);
    for (const childQuestion of childQuestions) {
      await this.delete(childQuestion.id);
    }
  }
}
