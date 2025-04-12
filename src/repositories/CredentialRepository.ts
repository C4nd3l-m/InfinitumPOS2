import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials.entity";
import { Repository } from "typeorm";


const CredentialRepository : Repository<Credential>  = AppDataSource.getRepository(Credential);

export default CredentialRepository;