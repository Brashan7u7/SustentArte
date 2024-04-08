import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UsuariosDto {
    @IsNumber()
    id_usuario: number;

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