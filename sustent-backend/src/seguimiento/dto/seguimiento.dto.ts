import { IsNumber, IsString } from "class-validator";

export class SeguimientoDto{
    @IsString()
    num_Guia:string;

    @IsString()
    empre_tansp:string;

    @IsNumber()
    edo_Envio:number;

    @IsNumber()
    pedidoId:number;
}