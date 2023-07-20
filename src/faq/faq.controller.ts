import { Controller, Get, Put, Delete } from '@nestjs/common';

@Controller('faq')
export class FaqController {
  
  @Get()
  getFaq() {
    return 'Endpoint GET /faq';
  }
  
  @Put()
  updateFaq() {
    return 'Endpoint PUT /faq';
  }
  
  @Delete()
  deleteFaq() {
    return 'Endpoint DELETE /faq';
  }
}
