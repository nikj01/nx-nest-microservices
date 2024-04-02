import { Module } from "@nestjs/common";
import { OwnersController } from "./owners.controller";
import { OWNERS_SERVICE, RmqModule } from "@services/libs";

@Module({
  imports: [RmqModule.registerClientsModuleAsync(OWNERS_SERVICE)],
  controllers: [OwnersController],
  providers: [],
})
export class OwnersModule {}
