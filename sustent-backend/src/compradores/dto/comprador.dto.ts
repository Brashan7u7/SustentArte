import { IsNumber, IsString } from "class-validator";

export class CompradorDto {
    @IsNumber()
    usuarioId: number;

    @IsString()
    correo:string;

    @IsString()
    password:string;
}