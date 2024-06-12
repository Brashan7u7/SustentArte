import { CompradoresInterface } from "./compradores.interface";
import { ProductosInterface } from "./producto.interface";
import { SeguimientoInterface } from "./seguimiento.interface";

export interface PedidosInterface {
    id_pedido: number;

    fecha_pedido: Date;

    numero_Pedido: string;

    precio_Total_Pedido: number;

    edo_Pedido: number;
    productos: Array<ProductosInterface>;

    comprador: CompradoresInterface;

    seguimiento: SeguimientoInterface;
}