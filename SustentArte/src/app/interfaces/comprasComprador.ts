export interface CompradorInterface {
    id_comprador: number;
    correo: string;
    password: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefono: string;
    ciudad: string;
    estado: string;
    cp: string;
    calle: string;
    colonia: string;
    numCasa: string;
}

export interface ProductoInterface {
    id_pedido_producto: number;
    idComprador: number;
    idArtesano: number;
}

export interface SeguimientoInterface {
    id_seguimiento: number;
    num_Guia: string;
    empresa_Transporte: string;
    edo_Envio: number | null;
    pedidoId: number;
}

export interface PedidoInterface {
    id_pedido: number;
    fecha_pedido: string;
    numero_Pedido: string;
    precio_Total_Pedido: number;
    edo_Pedido: number;
    comprador: CompradorInterface;
    productos: ProductoInterface[];
    seguimiento: SeguimientoInterface;
}
