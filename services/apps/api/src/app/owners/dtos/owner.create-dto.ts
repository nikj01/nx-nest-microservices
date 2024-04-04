import { IsArray, IsString } from "class-validator";
import { Expose } from "class-transformer";

export class OwnerCreateDto {
  @Expose()
  @IsString()
  surname: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsArray()
  cars?: string[];
}
