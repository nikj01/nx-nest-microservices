import { Module } from "@nestjs/common";
import { OwnerRepository } from "./repositories/owner.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Owner, OwnerSchema } from "./models/owner.model";
import { OwnerController } from "./controllers/owner.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }])],
  providers: [OwnerRepository],
  controllers: [OwnerController],
  exports: [],
})
export class OwnerModule {}
