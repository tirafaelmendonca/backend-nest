import { Lawsuit, LawsuitSchema } from './entities/lawsuit.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LawsuitService } from './lawsuit.service';
import { LawsuitController } from './lawsuit.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lawsuit.name, schema: LawsuitSchema },
    ]),
  ],
  controllers: [
    LawsuitController,
  ],
  providers: [
    LawsuitService,
  ],
})
export class LawsuitModule {}
