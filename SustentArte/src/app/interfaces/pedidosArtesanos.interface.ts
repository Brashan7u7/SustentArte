import { CompradoresInterface } from "./compradores.interface";
import { PedidosInterface } from "./pedidos.interface";
import { ProductosInterface } from "./producto.interface";

export interface PedidosArtesanosInterface {
    id_pedido_producto: number;
    idComprador: number;
    idArtesano: number;
    productos: ProductosInterface;
    pedidos: PedidosInterface;

    comprador?:CompradoresInterface;
}