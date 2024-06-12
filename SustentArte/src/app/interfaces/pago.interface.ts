export interface PagoInterface {
    fecha_pago: Date;

    monto_pago: number;

    metodo_pago: string;

    num_transaccion: string;

    edo_pago: string;

    detalleId: number;

    compradorId: number;
}