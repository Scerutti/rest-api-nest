import { Controller , Post , Get, Put , Delete, Res , HttpStatus , Body, Param, NotFoundException, Query} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService ){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const createdProd = await this.productService.createProductDTO(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message:'Product successfully created',
            createdProd
        });
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getAllProducts();
        return res.status(HttpStatus.OK).json( products )
    }
    @Get('/:productId')
    async getProduct(@Res() res, @Param('productId') productId){
        const product = await this.productService.getOneProduct(productId);
        
        if(!product) throw new NotFoundException('Product does not exist');

        return res.status(HttpStatus.OK).json( product )
    }
    
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productId') productId){
        const deleteProduct = await this.productService.deleteOneProduct(productId) 
        if(!deleteProduct) throw new NotFoundException('Product does not exist');

        return res.status(HttpStatus.OK).json( {
            msg:'Product deleted successfully',
            deleteProduct
        } )
    }

    @Put('/update')
    async updateProduct (@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID:string){
        const updatedProduct = await this.productService.updateProductDTO(productID,createProductDTO);
        if(!updatedProduct) throw new NotFoundException('Product does not exist');
        
        return res.status(HttpStatus.OK).json({
            msg:'Product update successfully',
            updatedProduct
        })
    }
}
