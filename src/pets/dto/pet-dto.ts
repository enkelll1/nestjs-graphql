import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PetDto {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
