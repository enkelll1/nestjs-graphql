import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './etinties/pet-entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity])],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
