import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { usersProviders } from './quote.providers';

@Module({
  providers: [QuotesService, ...usersProviders],
  controllers: [QuotesController],
})
export class QuotesModule {}
