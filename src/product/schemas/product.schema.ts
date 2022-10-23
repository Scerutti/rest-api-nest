import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProductDocument = Products & Document;

@Schema()
export class Products{
    @ApiProperty({
        description:'The name of the category of product',
        example:'Laptop'
    })
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    description: string;
    @Prop({required: true})
    imageURL: string;
    @Prop({required: true})
    price: number;

    @Prop({default: Date.now})
    createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Products)