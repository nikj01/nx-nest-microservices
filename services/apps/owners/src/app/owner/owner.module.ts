import { Module } from "@nestjs/common";
import { OwnerRepository } from "./repositories/owner.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Owner, OwnerSchema } from "./models/owner.model";
import { OwnerController } from "./controllers/owner.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
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
  providers: [OwnerRepository],
  controllers: [OwnerController],
  exports: [],
})
export class OwnerModule {}
