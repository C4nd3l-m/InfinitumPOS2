import { Credential } from "../entities/Credentials.entity";
import CredentialRepository from "../repositories/CredentialRepository";
import bcrypt from "bcrypt"
import { EntityManager } from "typeorm";

const checkUserExist = async (username: string): Promise<void> =>{
    const credentialFound: Credential | null = await CredentialRepository.findOne({where:{ username }})
    if(credentialFound){
        throw new Error(`El usuario ${username} ya existe`);
    } 
}

export const getCredentialService = async (entityManager: EntityManager, username: string, password: string): Promise<Credential | undefined> =>{
    await checkUserExist(username)

    const passwordEncrypted = await bcrypt.hash(password, 10)
    const objCredentials: Credential = entityManager.create(Credential, {
        username,
        password: passwordEncrypted,
    })
    return await entityManager.save(objCredentials);
};

export const checkUserCredentials = async (username: string, password: string): Promise<number | undefined> =>{
    const credentialFound: Credential | null = await CredentialRepository.findOne({ where: {username}});
    if(!credentialFound) throw new Error("Usuario o contraseña incorrectos")
    
    const isPassValid = await bcrypt.compare(password, credentialFound.password);
    if(!isPassValid) throw new Error("Usuario o contraseña incorrectos")

    return credentialFound.id;
}