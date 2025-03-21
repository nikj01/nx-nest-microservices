import { MongooseModuleAsyncOptions } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const getMongoConfig = (): MongooseModuleAsyncOptions => {
  return {
    useFactory: (configService: ConfigService) => ({
      uri: getMongoString(configService),
    }),
    inject: [ConfigService],
    imports: [ConfigModule],
  };
};

const getMongoString = (configService: ConfigService) =>
  "mongodb://" +
  configService.get("MONGO_LOGIN") +
  ":" +
  configService.get("MONGO_PASSWORD") +
  "@" +
  configService.get("MONGO_HOST") +
  ":" +
  configService.get("MONGO_PORT");
