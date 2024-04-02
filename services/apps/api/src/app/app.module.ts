import { Module } from "@nestjs/common";

import { RmqModule } from "@services/libs";
import { OWNERS_SERVICE } from "@services/libs";
import { ConfigModule } from "@nestjs/config";
import { OwnersModule } from "./owners/owners.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "envs/.owners.env",
    }),
    OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
