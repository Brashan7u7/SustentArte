import { IsString } from "class-validator";

export class adminDto {
    @IsString()
    nombre: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}