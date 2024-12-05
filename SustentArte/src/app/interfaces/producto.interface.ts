import { ArtesanoInterface } from "./artesano.interface";
import { CategoriaInterface } from "./categoria.interface";
import { MaterialesInterface } from "./materiales.interface";

export interface ProductosInterface{
    id_producto: number;
    nombreP:string;
    descripcion:string;
    imagen:string;
    precio_Venta:number;
    stock:number;
    historia:string;
    artesano:ArtesanoInterface;
    materiales:MaterialesInterface;
    categoria:CategoriaInterface;
}