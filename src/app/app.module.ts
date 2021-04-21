import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './core/db/db.module';
import { AppController } from './app.controller';
import { QuotesModule } from './modules/quotes/quotes.module';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    QuotesModule,
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../static'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
