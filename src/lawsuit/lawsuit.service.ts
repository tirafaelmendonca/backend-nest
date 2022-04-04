import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLawsuitDto } from './dto/create-lawsuit.dto';
import { UpdateLawsuitDto } from './dto/update-lawsuit.dto';
import { Lawsuit, LawsuitDocument } from './entities/lawsuit.entity';

@Injectable()
export class LawsuitService {
  constructor (@InjectModel(Lawsuit.name) private lawsuitModel: Model<LawsuitDocument>) {}

  create (createLawsuitDto: CreateLawsuitDto) {
    const lawsuit = new this.lawsuitModel(createLawsuitDto);
    return lawsuit.save();
  }

  findAll () {
    return this.lawsuitModel.find();
  }

  findOne (id: string) {
    return this.lawsuitModel.findById(id);
  }

  update (id: string, updateLawsuitDto: UpdateLawsuitDto) {
    return this.lawsuitModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateLawsuitDto },
      { new: true }
    );
  }

  remove (id: string) {
    return this.lawsuitModel.deleteOne({ _id: id }).exec();
  }
}
