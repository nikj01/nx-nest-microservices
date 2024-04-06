import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { OWNERS_SERVICE, RmqService } from "@services/libs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.connectMicroservice(rmqService.getOptions(OWNERS_SERVICE));
  app.startAllMicroservices();
  Logger.log(`🚀 Owners service is running`);
}

bootstrap();
