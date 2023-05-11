import { IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  categoryId: number;

  @IsString()
  description: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  price: number;
}
