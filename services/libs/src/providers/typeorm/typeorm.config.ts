import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";

export const getTypeOrmOptions = (): TypeOrmModuleAsyncOptions => {
  return {
    useFactory: (configService: ConfigService) => ({
      url: getPostgreString(configService),
      type: getDbType(configService),
      schema: "public",
      logging: getLogFlag(configService),
      entities: [],
      migrations: ["./services", "migrations", "**", "*migration.ts"],
      migrationsRun: true,
      migrationsTableName: "migrations",
    }),
  };
};

const getPostgreString = (configService: ConfigService) =>
  "postgresql://" +
  configService.get("PG_LOGIN") +
  ":" +
  configService.get("PG_PASSWORD") +
  "@" +
  configService.get("PG_HOST") +
  ":" +
  configService.get("PG_PORT") +
  "/" +
  configService.get("PG_DB_NAME");
const getDbType = (configService: ConfigService) => configService.get("DB_TYPE");
const getLogFlag = (configService: ConfigService) => configService.get("IS_PROD") === "false";
