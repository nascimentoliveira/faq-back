import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FaqModule } from './faq/faq.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FaqModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
