import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Repository } from 'typeorm';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(private readonly cvRepository: Repository<Cv>) {}

  create(createCvDto: CreateCvDto) {
    const cv: Cv = new Cv();
    cv.name = createCvDto.name;
    cv.firstName = createCvDto.firstName;
    cv.age = createCvDto.age;
    cv.cin = createCvDto.cin;
    cv.job = createCvDto.job;
    cv.user = { id: createCvDto.userId } as any;

    return this.cvRepository.create(cv);
  }

  findAll() {
    return this.cvRepository.find();
  }

  findOne(id: string) {
    return this.cvRepository.findOneBy({ id });
  }

  update(id: string, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: string) {
    return `This action removes a #${id} cv`;
  }
}
