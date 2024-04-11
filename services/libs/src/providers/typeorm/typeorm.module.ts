import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { getTypeOrmOptions } from "./typeorm.config";

@Module({
  imports: [TypeOrmModule.forRootAsync(getTypeOrmOptions())],
})
export class TypeormModule {}
