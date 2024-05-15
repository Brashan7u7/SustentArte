import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { usuarioDto } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private servicioUsuario: UsuarioService) {
    }

    @Get()
    getUsuarios()
    {
        return this.servicioUsuario.getUsuarios();
    }

    @Get(':id')
    getUsuario(@Param('id') id:number)
    {
        return this.servicioUsuario.getUsuario(id);
    }

    @Post()
    createUsuario(@Body() usuario:usuarioDto)
    {
        return this.servicioUsuario.createUsuario(usuario);
    }

    @Put(':id')
    updateUsuario(@Param('id') id:number,@Body() usuario:usuarioDto)
    {
        return this.servicioUsuario.updateUsuario(id,usuario);
    }

    @Delete(':id')
    deleteUsuario(@Param('id') id:number)
    {
        return this.servicioUsuario.deleteUsuario(id);
    }
}
