import IAppointmentDto from "./AppointmenDto";

export interface UserRegisterDto {
    name: string;
    email: string;
    birthDate: string;
    nDni: number;
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
    nDni?: number;
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
    nDni?: number;
    appointments?: IAppointmentDto[]
}

export interface CreatedUserResponseDto {
    id: number;
    name: string;
    email: string;
}
