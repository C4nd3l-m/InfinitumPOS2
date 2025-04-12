import { Column, Entity, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { User } from "./User.entity";

@Entity({ name: "credentials" })
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" ,nullable: false, unique: true })
    username: string;

    @Column({ type: "varchar",nullable: false })
    password: string;

    @OneToOne(() => User, (user) => user.credentials)
    user: User;


    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updateAt?: Date

}
