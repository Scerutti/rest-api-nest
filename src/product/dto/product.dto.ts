import { IsNotEmpty } from 'class-validator'


export class CreateProductDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    imageURL: string;

    @IsNotEmpty()
    price: number;

    createdAt: Date;
}