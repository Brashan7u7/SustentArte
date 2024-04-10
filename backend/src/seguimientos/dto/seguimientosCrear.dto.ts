import { IsNumber, IsString } from "class-validator";

export class seguimientosDto
{
    @IsString()
    num_guia:string

    @IsString()
    empre_tansp:string

    @IsNumber()
    edo_Envio:number

    @IsNumber() 
    id_pedidos:number
}