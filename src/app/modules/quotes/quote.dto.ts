import { IsNotEmpty } from 'class-validator';

export class QuouteDto {
  id?: number;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  text: string;
  source?: string;
  tags?: string;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
}

export class CreateQuoteDto {
  quote: QuouteDto;
}
