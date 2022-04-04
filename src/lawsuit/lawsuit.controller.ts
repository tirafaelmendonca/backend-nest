import { Lawsuit } from './entities/lawsuit.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LawsuitService } from './lawsuit.service';
import { CreateLawsuitDto } from './dto/create-lawsuit.dto';
import { UpdateLawsuitDto } from './dto/update-lawsuit.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('lawsuit')
@ApiTags('lawsuit')
export class LawsuitController {
  constructor (private readonly lawsuitService: LawsuitService) {}

  @Post()
  create (@Body() createLawsuitDto: CreateLawsuitDto) {
    return this.lawsuitService.create(createLawsuitDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [
      Lawsuit,
    ],
  })
  findAll () {
    return this.lawsuitService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, type: Lawsuit })
  findOne (@Param('id') id: string) {
    return this.lawsuitService.findOne(id);
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateLawsuitDto: UpdateLawsuitDto) {
    return this.lawsuitService.update(id, updateLawsuitDto);
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.lawsuitService.remove(id);
  }
}
