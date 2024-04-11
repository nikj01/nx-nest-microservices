import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProvidersModule } from "@services/libs";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ["envs/.env", "envs/.cars.env"],
    }),
    ProvidersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
