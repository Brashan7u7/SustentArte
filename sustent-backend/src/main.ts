/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  try {
    console.log('Conexión exitosa a postgres');
  } catch (error) {
    console.error('Error al conectar a postgres:', error);
    throw new Error('Conexión fallida');
  }
}
bootstrap();
