import { IsDate, IsString, IsNumber } from "class-validator";

export class PedidosDto{
    @IsDate()
    fecha_Pedido: Date;

    @IsString()
    numero_Pedido: string;

    @IsString()
    lista_Prod: string;

    @IsNumber()
    precio_Total_Ped: number;

    @IsNumber()
    edo_Ped: number;

    @IsNumber()
    productoId: number;

    @IsNumber()
    seguimientoId: number;
    
    @IsNumber()
    compradorId: number;
}