export class QuestionWithSubquestions {
  id: number;
  question: string;
  answer: string;
  order: number;
  parent_question_id: number;
  createdAt: Date;
  updatedAt: Date;
  subquestions: QuestionWithSubquestions[] | null;
}
