import { Document } from "mongoose";
import { IOwner } from "@services/interfaces";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Owner extends Document implements IOwner {
  @Prop({ isRequired: true })
  surname: string;

  @Prop({ isRequired: true })
  name: string;

  @Prop()
  cars?: string[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
