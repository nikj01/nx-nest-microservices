import { IsArray, IsOptional, IsString } from "class-validator";

export namespace OwnerCreate {
  export const pattern = { cmd: "owner.create-owner.message" };

  export class Request {
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
