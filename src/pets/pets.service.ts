import { Injectable } from '@nestjs/common';
import { PetEntity } from './etinties/pet-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetDto } from './dto/pet-dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(PetEntity) private petsRepository: Repository<PetEntity>,
  ) {}

  async create(petDto: PetDto): Promise<PetEntity> {
    const pet = await this.petsRepository.create(petDto);
    return this.petsRepository.save(pet);
  }

  async findAll(): Promise<PetEntity[]> {
    return await this.petsRepository.find();
  }
}
