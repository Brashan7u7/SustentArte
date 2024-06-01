import { IsString } from "class-validator";

export class artesanosLoginDto {
    @IsString()
    correo: string;

    @IsString()
    password: string;
}