import { Quote } from './quote.entity';
import { QUOTE_REPOSITORY } from '../../core/constants';

export const usersProviders = [
  {
    provide: QUOTE_REPOSITORY,
    useValue: Quote,
  },
];
