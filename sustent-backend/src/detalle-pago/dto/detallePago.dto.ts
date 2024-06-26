import { IsNumber, IsString } from "class-validator";

export class DetallePagoDto {

    @IsString()
    nombreTitular: string;

    @IsString()
    numTarjeta: string;

    @IsString()
    fechaVencimiento: string;

    @IsString()
    anoVencimiento: string;

    @IsString()
    cvv: string;

    @IsString()
    tipoTarjeta: string;

    @IsString()
    compania: string;
}