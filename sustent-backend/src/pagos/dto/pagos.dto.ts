import { IsDate, IsNumber, IsString } from "class-validator";

export class PagosDto {

    @IsDate()
    fecha_pago: Date;

    @IsNumber()
    monto_pago: number;

    @IsString()
    metodo_pago: string;

    @IsString()
    num_transaccion: string;

    @IsString()
    edo_pago: string;

    @IsNumber()
    detalleId: number;

    @IsNumber()
    compradorId: number;
}