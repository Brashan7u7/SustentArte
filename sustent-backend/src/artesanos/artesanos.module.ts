import { Module } from '@nestjs/common';
import { ArtesanosService } from './artesanos.service';
import { ArtesanosController } from './artesanos.controller';

@Module({
  providers: [ArtesanosService],
  controllers: [ArtesanosController]
})
export class ArtesanosModule {}
