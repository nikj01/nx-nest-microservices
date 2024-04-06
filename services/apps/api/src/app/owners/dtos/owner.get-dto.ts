import { IsString } from "class-validator";
import { OwnerCreateDto } from "./owner.create-dto";

export class OwnerGetDto extends OwnerCreateDto {
  @IsString()
  _id: string;
}
