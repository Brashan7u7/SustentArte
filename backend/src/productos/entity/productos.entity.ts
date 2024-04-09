import { IsEmail, IsNumber, IsString } from 'class-validator';
import { categoriasEntity } from 'src/categorias/entity/categorias.entity';
import { ManyToMany, ManyToOne, OneToOne } from 'typeorm';

export class productosDto{
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
}