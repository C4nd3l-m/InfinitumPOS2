import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Sale } from "./Sale.entity";
import { Product } from "./Products.entity";


@Entity({ name: "sale_details" })
export class SaleDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Sale, (sale) => sale.saleDetails, { nullable: false })
    @JoinColumn({ name: "saleId" })
    sale: Sale;

    @ManyToOne(() => Product, (product) => product.saleDetails, { nullable: false })
    @JoinColumn({ name: "productId" })
    product: Product;

    @Column({ type: "int", nullable: false })
    quantity: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    unitPrice: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    subtotal: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    profit: number; 
}
