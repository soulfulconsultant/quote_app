import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateQuoteDto, QuouteDto } from './quote.dto';
import { Quote } from './quote.entity';
import { QuotesService } from './quotes.service';

@Controller('api/quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  async getAll() {
    const quotes: Quote[] = await this.quotesService.findAll();
    return {
      data: quotes,
    };
  }

  @Get('random')
  async getRandom(@Query('tag') tag) {
    const quote = await this.quotesService.findRandom(tag);
    return {
      data: quote,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    const quote: Quote = await this.quotesService.findOneById(id);
    if (!quote) {
      throw new HttpException('Quote not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: { ...quote.get(), tags: quote.tags.join(',') },
    };
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createQouteDto: CreateQuoteDto): Promise<Quote> {
    return this.quotesService.create(createQouteDto.quote);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateQouteDto: QuouteDto,
  ): Promise<Quote> {
    const {
      numberOfAffectedRows,
      updatedQuote,
    } = await this.quotesService.update(id, updateQouteDto);
    if (numberOfAffectedRows === 0) {
      throw new HttpException(
        'This quote does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    return updatedQuote;
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async delete(@Param('id') id: number): Promise<string> {
    const { numberOfAffectedRows } = await this.quotesService.delete(id);
    if (numberOfAffectedRows === 0) {
      throw new HttpException(
        'This quote does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    return 'Quote successfully deleted';
  }
}
