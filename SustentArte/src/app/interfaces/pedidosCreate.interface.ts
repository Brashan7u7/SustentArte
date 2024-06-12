import { ProductosArray } from "./productosArray.interface";

export interface pedidoCreateInterface {
    fecha_pedido: Date;

    numero_Pedido: string;

    precio_Total_Pedido: number;

    edo_Pedido: number;

    productosA: Array<ProductosArray>;
    
    compradorId: number;
}