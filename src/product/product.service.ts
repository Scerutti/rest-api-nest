import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product> ){}
    //Metodo sensillo para realizar una busqueda en nuestra base de datos, retornando un Array de productos
        async getProducts(): Promise<Product[]> {
            const products = await this.productModel.find();
            return products;
        }
    //Metodo para realizar una busqueda por ID en nuestra DB
        async getProduct(productID:string): Promise<Product> {
            const product = await this.productModel.findById(productID);
            return product;
        }
    //Metodo para crear un nuevo elemento en nuestra tabla de la db
        async createProductDTO(createProductDTO:CreateProductDTO): Promise<Product>{
            const product = new this.productModel(createProductDTO)
            return await product.save();
        }
    //Metodo para eliminar un elemento de nuetra tabla
        async deleteProduct(productID: string): Promise<Product>{
            const deletedProduct = await this.productModel.findByIdAndDelete(productID)
            return deletedProduct;
        }
    //Metodo para actualizar y MOSTRAR el elemento actualizado
        async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
            const updatedProduct = await this.productModel.findByIdAndUpdate(productID,createProductDTO, { new: true });
            return updatedProduct;
        }

}
