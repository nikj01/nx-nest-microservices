import { Module } from "@nestjs/common";
import { OwnerRepository } from "./owner.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Owner, OwnerSchema } from "./owner.model";
import { OwnerCommands } from "./owner.commands";
import { OwnerService } from "./owner.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }])],
  providers: [OwnerService, OwnerRepository],
  controllers: [OwnerCommands],
  exports: [],
})
export class OwnerModule {}
