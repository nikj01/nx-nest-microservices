import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "OWNERS_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5672"],
          queue: "owners-queue",
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
