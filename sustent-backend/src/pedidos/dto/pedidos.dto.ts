import { IsDate, IsString, IsNumber, IsArray } from "class-validator";
import { ProductosA } from "./productosA.dto";

export class PedidosDto{
    @IsDate()
    fecha_pedido: Date;

    @IsString()
    numero_Pedido: string;

    @IsNumber()
    precio_Total_Pedido: number;

    @IsNumber()
    edo_Pedido: number;

    @IsArray()
    productosA: Array<ProductosA>;
    
    @IsNumber()
    compradorId: number;

}