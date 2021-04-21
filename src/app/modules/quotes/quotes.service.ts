import { Injectable, Inject } from '@nestjs/common';
import { QUOTE_REPOSITORY } from 'src/app/core/constants';
import { QuouteDto } from './quote.dto';
import { Quote } from './quote.entity';
import { Sequelize } from 'sequelize-typescript';

import { Op } from 'sequelize';

@Injectable()
export class QuotesService {
  constructor(
    @Inject(QUOTE_REPOSITORY) private readonly quoteRepository: typeof Quote,
  ) {}

  async create(quote: QuouteDto): Promise<Quote> {
    const data = {
      ...quote,
      tags: quote.tags.split(','),
      createdAt: new Date().toISOString(),
      createdBy: 'APP USER', // TODO: what does app’s user who initiate creation of quote mean ?
      isDeleted: false,
    };
    return await this.quoteRepository.create(data);
  }

  async update(id: number, data: QuouteDto) {
    const [
      numberOfAffectedRows,
      [updatedQuote],
    ] = await this.quoteRepository.update(
      {
        ...data,
        tags: data.tags.split(','),
        updatedAt: new Date().toISOString(),
      },
      { where: { id }, returning: true },
    );
    return { numberOfAffectedRows, updatedQuote };
  }

  async findAll(): Promise<Quote[]> {
    return this.quoteRepository.findAll({ where: { isDeleted: false } });
  }

  async findOneById(id: number): Promise<Quote> {
    return this.quoteRepository.findOne<Quote>({
      where: { id, isDeleted: false },
    });
  }

  async findRandom(tag: string): Promise<Quote> {
    const queryObj = tag
      ? {
          where: Sequelize.or(
            { tags: { [Op.contains]: [tag] } },
            { text: { [Op.like]: tag } },
          ),
        }
      : {};
    const res = await this.quoteRepository.findAll(queryObj);
    return res && res.length
      ? res[Math.floor(Math.random() * res.length)]
      : null;
  }

  async delete(id: number) {
    const [
      numberOfAffectedRows,
      [updatedQuote],
    ] = await this.quoteRepository.update(
      {
        isDeleted: true,
      },
      { where: { id }, returning: true },
    );
    return { numberOfAffectedRows, updatedQuote };
  }
}
