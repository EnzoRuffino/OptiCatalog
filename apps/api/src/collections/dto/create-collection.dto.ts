import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  @MinLength(1)
  label!: string;

  @IsOptional()
  @IsString()
  originalDescription?: string;
}
