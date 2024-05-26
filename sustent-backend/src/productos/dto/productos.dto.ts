import { IsNumber, IsString } from "class-validator";

export class ProductosDto{
    @IsString()
    nombreP:string;

    @IsString()
    descripcion:string;

    @IsNumber()
    precio_Venta:number;

    @IsNumber()
    stock:number;

    @IsString()
    historia:string;

    @IsNumber()
    materialId:number;
    @IsNumber()
    artesanoId:number;
    @IsNumber()
    pedidoId:number;
    @IsNumber()
    categoriaId:number;
}