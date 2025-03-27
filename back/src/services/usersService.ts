import { UserDataDto, UserRegisterDto, UserCLoginDto, UserLoginDto } from "../dto/UserDto";
import UserRepository from "../repositories/UserRepository"

import { User } from "../entities/User.entity"
import { checkUserCredentials, getCredentialsService } from "./credentialsService"
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials.entity";


export const getUserService = async (id: number): Promise<UserDataDto> => {
    const userFound = await UserRepository.findOne({
        where: { id },
        relations: ["credentials", "sales", "sales.saleDetails", "sales.saleDetails.product"] 
    });

    if (!userFound) throw new Error("User not found");

    return {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        birthDate: userFound.birthDate,
        sales: userFound.sales.map(sale => ({
            date: sale.date,
            time: sale.time,
            userId: sale.user.id,
            description: sale.saleDetails.map(detail => `${detail.quantity}x ${detail.product.name}`).join(", "),
            paymentMethod: sale.paymentMethod,
            totalPrice: sale.totalPrice,
            totalProfit: sale.totalProfit,
            status: sale.status
        }))
    };
};


export const createUserService = async (user: UserRegisterDto): Promise<User> => {
    const result = await AppDataSource.transaction(async (entityManager) => {
        const userCredentials: Credential | undefined = await getCredentialsService(entityManager, user.username, user.password)
        console.log("Credentials created");
        const newUser: User = entityManager.create(User, {
            name: user.name,
            email: user.email,
            birthDate: new Date(user.birthDate),
            credentials: userCredentials
        })

        const savedUser = await entityManager.save(newUser)
        console.log("User created", savedUser)
        return savedUser;
    })

    return result
}

export const loginUserService = async (userCredentials: UserLoginDto): Promise<UserCLoginDto> =>{
    const credentialId: number | undefined = await checkUserCredentials(userCredentials.username, userCredentials.password)
    const userFound: User | null = await UserRepository.findOne(
        {
            where:{
                credentials: {
                    id: credentialId
                }
            },
            relations: ["credentials"]
        })

        return{
            login: true,
            user: {
                id: userFound?.id,
                name: userFound?.name,
                email: userFound?.email,
                birthDate: userFound?.birthDate,
                credentialId: userFound?.credentials.id
            }
        }
}