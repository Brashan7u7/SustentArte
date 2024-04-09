import { IsEmail, IsNumber, IsString } from 'class-validator';
import { categoriasEntity } from 'src/categorias/entity/categorias.entity';
import { pedidosEntity } from 'src/pedidos/entity/pedidos.entity';
import { ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';

export class productosEntity{
    @IsNumber()
    id_Producto:number;

    @IsString()
    nombreP:string;

    @IsString()
    descripcion:string;
    
    @OneToOne(()=>categoriasEntity,(categorias)=> categorias.productos, {nullable: true})
    categorias:categoriasEntity
    
    @IsNumber()
    precio_Venta:number;

    @IsNumber()
    stock:number;

    @ManyToOne(()=>artesanosEntity,(artesanos)=>artesanos.artesanos, {nullable: true})
    artesanos:artesanosEntity

    @OneToMany(()=>pedidosEntity,(pedidos)=>pedidos.productos,{nullable:true})
    pedidos:pedidosEntity
}