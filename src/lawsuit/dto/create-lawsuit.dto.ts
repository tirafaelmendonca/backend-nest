import { ApiProperty } from '@nestjs/swagger';

export class CreateLawsuitDto {
  @ApiProperty() lawsuitNumber: string;

  @ApiProperty() author: string;

  @ApiProperty() defendant: string;
}
