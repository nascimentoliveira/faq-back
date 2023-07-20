import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Question } from '@prisma/client';
import { FaqService } from './faq.service';
import { QuestionWithSubquestions } from './model/question.model';
import { QuestionDTO } from './dto/question.dto';

@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) { }

  @Get()
  async getAll(): Promise<QuestionWithSubquestions[]> {
    return this.faqService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<QuestionWithSubquestions[]> {
    return this.faqService.getById(parseInt(id));
  }

  @Post()
  async createParent(@Body() data: QuestionDTO): Promise<Question> {
    return this.faqService.createParent(data);
  }

  @Post(':id')
  async createSubquestion(
    @Param('id') id: string,
    @Body() data: QuestionDTO,
  ): Promise<Question> {
    return this.faqService.createSubquestion(parseInt(id), data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: QuestionDTO,
  ): Promise<Question> {
    return this.faqService.update(parseInt(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Question> {
    return this.faqService.delete(parseInt(id));
  }
}
