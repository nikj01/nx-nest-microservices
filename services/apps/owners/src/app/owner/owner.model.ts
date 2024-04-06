import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Owner extends Document {
  @Prop({ isRequired: true })
  surname: string;

  @Prop({ isRequired: true })
  name: string;

  @Prop()
  cars?: string[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
