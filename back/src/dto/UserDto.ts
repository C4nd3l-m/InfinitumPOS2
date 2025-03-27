import ISaleDto from "./SaleDto";

export interface UserRegisterDto {
    name: string;
    email: string;
    birthDate: string;
    username: string; 
    password: string; 

}

export interface UserLoginDto{ //userCredential
    username: string, 
    password: string
}

export interface UserCLoginDto{ //userLogin
    login: boolean,
    user: UserDataLoginDto
}

export interface UserDataLoginDto{
    id?: number,
    name?: string;
    email?: string;
    birthDate?: Date;
    credentialId: number | undefined
}

export interface UserDto{
    id: number
    name: string
    email: string
}

export interface UserCredentialsDto{
    username: string
}

export interface UserDataDto{
    id?: number,
    name?: string;
    email?: string;
    birthDate?: Date;
    sales?: ISaleDto[]
}

export interface CreatedUserResponseDto {
    id: number;
    name: string;
    email: string;
}
