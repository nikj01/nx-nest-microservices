import { IsString } from "class-validator";
import { OwnerCreateDto } from "./owner.create-dto";
import { Expose } from "class-transformer";

export class OwnerGetDto extends OwnerCreateDto {
  @Expose()
  @IsString()
  _id: string;
}
