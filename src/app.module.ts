import { Module } from '@nestjs/common';
import { LawsuitModule } from './lawsuit/lawsuit.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    LawsuitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
