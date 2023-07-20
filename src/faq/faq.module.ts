import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FaqController } from './faq.controller';
import { FaqService } from './faq.service';
import { FaqRepository } from './faq.repository';

@Module({
  imports: [PrismaModule],
  controllers: [FaqController],
  providers: [FaqService, FaqRepository],
})
export class FaqModule { }
