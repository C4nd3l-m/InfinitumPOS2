import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { SaleDetail } from "./SaleDetail.entity";

@Entity({ name: "products" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    priceCash: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    priceCard: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    costPrice: number;

    @OneToMany(() => SaleDetail, (saleDetail) => saleDetail.product)
    saleDetails: SaleDetail[];
}
