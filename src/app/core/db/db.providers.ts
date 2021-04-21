import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { SEQUELIZE } from '../constants';
import { dbConfig } from './db.config';
import { Quote } from '../../modules/quotes/quote.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(<SequelizeOptions>dbConfig);
      sequelize.addModels([Quote]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
