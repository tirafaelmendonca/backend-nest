import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LawsuitDocument = Lawsuit & Document;

@Schema()
export class Lawsuit {
  @Prop() lawsuitNumber: string;

  @Prop() author: string;

  @Prop() defendant: string;
}

export const LawsuitSchema = SchemaFactory.createForClass(Lawsuit);
