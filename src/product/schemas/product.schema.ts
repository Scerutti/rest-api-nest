// import { Schema } from 'mongoose'

// export const ProductSchema = new Schema({
//     name: {type: String, required: true},
//     desccription: String,
//     imageURL: String,
//     price: {type: Number, required: true},
//     createdAt: {
//         type:Date,
//         default: Date.now
//     }
// });
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { Document } from 'mongoose';

export type ProductDocument = Products & Document;

@Schema()
export class Products{
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