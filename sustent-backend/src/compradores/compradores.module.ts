import { Module } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { CompradoresController } from './compradores.controller';

@Module({
  providers: [CompradoresService],
  controllers: [CompradoresController]
})
export class CompradoresModule {}
