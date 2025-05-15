import { Product } from "../entities/Products.entity";
import { ProductRepository } from "../repositories/ProductsRepository";
import { IProduct } from "../interfaces/IProduct";

export const getProductsService = async (): Promise<Product[]> =>{
    return await ProductRepository.find()
}

export const postProductService = async (productData: IProduct): Promise<Product> =>{
    const newProduct = ProductRepository.create(productData)
    return await ProductRepository.save(newProduct);
    
}

export const deleteProductService = async (id: number) => {
    const product = await ProductRepository.findOneBy({ id });
    if (!product) throw new Error("Product not found");

    return await ProductRepository.remove(product);
};

export const editProductService = async (id: number, productData: Partial<Product>) =>{
    const product = await ProductRepository.findOneBy({ id });
    if(!product) throw new Error("Product not found")

    const updatedProduct = ProductRepository.merge(product, productData)
    return await ProductRepository.save(updatedProduct);
}