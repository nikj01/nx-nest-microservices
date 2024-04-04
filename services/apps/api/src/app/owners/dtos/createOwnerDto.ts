import { IsArray, IsString } from "class-validator";

export class CreateOwnerDto {
  @IsString()
  surname: string;

  @IsString()
  name: string;

  @IsArray()
  cars?: string[];
}
