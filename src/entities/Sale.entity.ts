import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User.entity";
import { SaleDetail } from "./SaleDetail.entity";
import { SaleStatus } from "../enums/SaleStatus";

@Entity({ name: "sales" })
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date", nullable: false })
    date: Date;

    @Column({ type: "time", nullable: false })
    time: string;

    @ManyToOne(() => User, (user) => user.sales, { nullable: false })
    @JoinColumn({ name: "userId" })
    user: User;

    @Column({ type: "enum", enum: ["cash", "card"], nullable: false })
    paymentMethod: "cash" | "card";

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    totalPrice: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    totalProfit: number;

    @OneToMany(() => SaleDetail, (saleDetail) => saleDetail.sale, { cascade: true })
    saleDetails: SaleDetail[];

    @Column({
        type: "enum",
        enum: SaleStatus,
        default: SaleStatus.Completed,
    })
    status: SaleStatus;

}
