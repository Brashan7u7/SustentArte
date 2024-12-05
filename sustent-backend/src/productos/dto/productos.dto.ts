import { IsNumber, IsString } from "class-validator";

export class ProductosDto{
    @IsString()
    nombreP:string;

    @IsString()
    descripcion:string;

    @IsString()
    imagen:string;

    @IsNumber()
    precio_Venta:number;

    @IsNumber()
    stock:number;

    @IsString()
    historia:string;

    @IsNumber()
    artesanoId:number;
    @IsNumber()
    materialesId:number;
    @IsNumber()
    categoriaId:number;
}