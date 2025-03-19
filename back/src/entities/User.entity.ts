import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Credential } from "./Credentials.entity";
import { Sale } from "./Sale.entity";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column("date")
    birthDate: Date;

    @OneToOne( () => Credential, { cascade: true })
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Sale, (sale) => sale.user, { nullable: false })
    sales: Sale[];

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt: Date;
}
