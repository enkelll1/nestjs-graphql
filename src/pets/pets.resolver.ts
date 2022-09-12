import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { PetEntity } from './etinties/pet-entity';
import { PetDto } from './dto/pet-dto';

@Resolver()
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [PetEntity])
  pets(): Promise<PetEntity[]> {
    return this.petsService.findAll();
  }

  @Mutation((returns) => PetEntity)
  newPet(@Args('createPetInput') petDto: PetDto): Promise<PetEntity> {
    return this.petsService.create(petDto);
  }

  @Mutation((returns) => PetEntity)
  updatePet(@Args('updatePetInput') petDto: PetDto): Promise<PetEntity> {
    return this.petsService.create(petDto);
  }
}
