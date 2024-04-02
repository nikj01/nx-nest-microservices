/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { RmqService } from "@services/libs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.connectMicroservice(rmqService.getOptions("owners-service-queue"));
  app.startAllMicroservices();
  Logger.log(`🚀 Owners service is running`);
}

bootstrap();
