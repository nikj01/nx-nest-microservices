import { IsArray, IsString } from "class-validator";

export class OwnerCreateDto {
  @IsString()
  surname: string;

  @IsString()
  name: string;

  @IsArray()
  cars?: string[];
}
