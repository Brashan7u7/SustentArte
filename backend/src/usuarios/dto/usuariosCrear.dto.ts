import { IsEmail, IsNumber, IsString } from 'class-validator';

export class crearUsuarios {

    @IsString()
    nombre: string;

    @IsString()
    apellidoPat: string;

    @IsString()
    apellidoMat: string;

    @IsString()
    @IsEmail()
    correo: string;

    @IsString()
    telefono: string;

    @IsString()
    ciudad: string;

    @IsString()
    estado: string;

    @IsString()
    cp: string;

    @IsString()
    calle: string;

    @IsString()
    numCasa: string;
}