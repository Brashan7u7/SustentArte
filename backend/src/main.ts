/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin1234@cluster0.1l0vbnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    );
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    throw new Error('Conexión fallida');
  }
}
bootstrap();
