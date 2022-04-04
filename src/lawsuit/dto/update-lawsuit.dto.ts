import { PartialType } from '@nestjs/mapped-types';
import { CreateLawsuitDto } from './create-lawsuit.dto';

export class UpdateLawsuitDto extends PartialType(CreateLawsuitDto) {}
