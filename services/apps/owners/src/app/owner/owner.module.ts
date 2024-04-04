import { Module } from "@nestjs/common";
import { OwnerRepository } from "./repositories/owner.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Owner, OwnerSchema } from "./models/owner.model";
import { OwnersController } from "./controllers/owners.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }])],
  providers: [OwnerRepository],
  controllers: [OwnersController],
  exports: [],
})
export class OwnerModule {}
