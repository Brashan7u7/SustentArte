import { IsNumber, IsString } from "class-validator";

export class CompradorDto {
    @IsNumber()
    usuarioId: number;

    @IsString()
    apodo: string;
}