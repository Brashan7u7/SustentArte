import { IsDate, IsNumber, IsString } from "class-validator"

export class pedidosDto
{
    @IsNumber()
    id_pedidos:number

    @IsDate()
    fecha_pedido:Date

    @IsString()
    numero_pedido:string

    @IsString()
    lista_prod:string

    @IsNumber()
    precio_total_ped:number

    @IsNumber()
    compradoresId:number

    @IsNumber()
    productosId:number

    @IsNumber()
    seguimientosId:number
}