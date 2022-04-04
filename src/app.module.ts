import { Module } from '@nestjs/common';
import { LawsuitModule } from './lawsuit/lawsuit.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tirafaelmendonca:Ana%23353932@cluster0.dxgif.mongodb.net/process-data-extractor'
    ),
    LawsuitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
