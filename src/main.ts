import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './database/knex'
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import knex from 'knex';
// import { Model } from 'objection';
// import config from 'knexfile';
// 🔥 thêm 2 cái này

async function bootstrap() {
  // const knexInstance = knex(config);
  // Model.knex(knexInstance) 
  

  const app = await NestFactory.create(AppModule);

   // 🔥 CONFIG SWAGGER
  const config = new DocumentBuilder()
    .setTitle('API VMS')
    .setDescription('API quản lý hệ thống')
    .setVersion('1.0')
    .addBearerAuth() // nếu sau này dùng JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  

  //validation
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);

  // 👉 URL: http://localhost:3100/api
  await app.listen(process.env.PORT ?? 3100);
}
bootstrap();
