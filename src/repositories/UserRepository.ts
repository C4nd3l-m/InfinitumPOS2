import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User.entity";

const UserRepository: Repository<User> = AppDataSource.getRepository(User)

export default UserRepository;