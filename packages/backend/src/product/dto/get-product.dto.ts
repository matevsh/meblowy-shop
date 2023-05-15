import { IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class GetProductDto {
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    itemId: number;
}