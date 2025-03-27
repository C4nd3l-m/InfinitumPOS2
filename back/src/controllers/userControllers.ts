import { Request, Response } from "express";
//import { createUserService, getUserByIdService} from "../services/userService"

import { UserLoginDto, UserDto, UserRegisterDto } from "../dto/UserDto";
import { loginUserService } from "../services/userService"
import { User } from "../entities/User.entity";

export const getUserByIdController = async (req: Request<{id: string}>, res: Response): Promise<void> =>{
    
    const { id } = req.params;

    try{
        const responseService = await getUserByIdService(parseInt(id, 10));
        res.status(200).json({
            message: "User Id",
            data: responseService
        })

    }catch(error){
        res.status(404).json({
            message: "User not found",
            error: error
        })
    }
}


export const userRegisterController = async (req: Request<unknown, unknown, UserRegisterDto>, res: Response): Promise<void> =>{
    try{
        const serviceResponse = User = await createUserService(req.body)
        res.status(201).json({
            message: "User registered successfully",
            data: serviceResponse
        })
    }catch(error){
        console.error("Error registering user", error);
        res.status(400).json({message: "Error registering user"})

    }

}

export const userLoginController = async (req: Request<unknown, unknown, UserLoginDto>, res: Response): Promise<void> =>{
    try{
        const serviceResponse: UserLoginDto = await loginUserService(req.body);
        res.status(200).json(serviceResponse)
    } catch(error){
        console.error(error)
        res.status(400).json({
            message: "Incorrect credentials",
            error: error
        })
    }
}