import { IsString } from "class-validator";

export class CompradorLoginDto {
    @IsString()
    correo: string;

    @IsString()
    password: string;
}