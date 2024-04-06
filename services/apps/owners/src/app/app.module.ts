import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { OwnerModule } from "./owner/owner.module";
import { getMongoConfig } from "./configs/mongo.config";
import { RmqModule } from "@services/libs";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "envs/.owners.env",
    }),
    MongooseModule.forRootAsync(getMongoConfig()),
    RmqModule,
    OwnerModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
