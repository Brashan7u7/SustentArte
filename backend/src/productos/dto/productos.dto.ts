import { IsNumber, IsString } from "class-validator";

export class productosDto
{
    @IsString()
    nombreP:string

    @IsString()
    descripcion:string

    @IsNumber()
    id_Categoria:number

    @IsNumber()
    precio_Venta:number

    @IsNumber()
    stock:number

    @IsNumber()
    id_Artesano:number

    @IsNumber()
    id_pedido:number

    @IsNumber()
    id_materiales:number
}