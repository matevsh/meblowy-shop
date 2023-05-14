import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';
import * as fs from 'node:fs/promises';
import * as process from 'process';

const REQUIRED_DIRS = ['upload', 'temp'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  REQUIRED_DIRS.forEach((dir) => {
    fs.readdir(dir).catch(() => fs.mkdir(dir));
  });

  const config = new DocumentBuilder()
    .setTitle('Shop API swagger')
    .setDescription('NestJS Shop API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.use(
    session({
      secret: 'no-secret-there',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.PORT || 3000);
}

void bootstrap();
