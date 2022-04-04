import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LawsuitDocument = Lawsuit & Document;

@Schema()
export class Lawsuit {
  @Prop()
  @ApiProperty()
  lawsuitNumber: string;

  @Prop()
  @ApiProperty()
  author: string;

  @Prop()
  @ApiProperty()
  defendant: string;
}

export const LawsuitSchema = SchemaFactory.createForClass(Lawsuit);
