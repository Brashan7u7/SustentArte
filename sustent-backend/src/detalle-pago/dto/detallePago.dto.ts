import { IsNumber, IsString } from "class-validator";

export class DetallePagoDto {

    @IsString()
    numTarjeta: string;

    @IsString()
    fechaVencimiento: string;

    

}