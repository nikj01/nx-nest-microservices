import { Module } from "@nestjs/common";

import { RmqModule } from "@services/libs";
import { OWNERS_SERVICE } from "@services/libs";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "envs/.owners.env",
    }),
    RmqModule.registerClientsModuleAsync(OWNERS_SERVICE),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
