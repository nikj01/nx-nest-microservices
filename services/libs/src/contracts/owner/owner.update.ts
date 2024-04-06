import { IsArray, IsOptional, IsString } from "class-validator";

export namespace OwnerUpdate {
  export const pattern = { cmd: "owner.update-owner.message" };

  export class Request {
    @IsString()
    _id: string;

    @IsString()
    surname: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsArray()
    cars?: string[];
  }

  export class Response {
    @IsString()
    _id: string;

    @IsString()
    surname: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsArray()
    cars?: string[];
  }
}
