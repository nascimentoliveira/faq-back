import { QuestionDTO } from './question.dto';

export class CreateQuestion extends QuestionDTO {
  parent_question_id: number;
  order: number;
}
