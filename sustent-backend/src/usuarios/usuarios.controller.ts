import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { usuariosDto } from './dto/usuariosCrear.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private service:UsuariosService)
    {

    }

    @Get()
    allUsers()
    {
        return this.service.allUsuarios()
    }

    @Get(':id')
    oneUser(@Param('id') id:number)
    {
        return this.service.oneUsuario(id)
    }

    @Post()
    newUser(@Body() bodyUser:usuariosDto)
    {
        return this.service.agregarUsuario(bodyUser)
    }

    @Put(':id')
    updateUser(@Param('id')id:number,@Body() bodyUser:usuariosDto)
    {
        return this.service.actualizarUsuario(id,bodyUser)
    }


}
