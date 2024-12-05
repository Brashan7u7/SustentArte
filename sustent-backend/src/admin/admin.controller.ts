import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminDto } from './dto/admin.dto';
import { AdminLoginDto } from './dto/adminLogin.dto';

@Controller('admin')
export class AdminController {

    constructor(private serviceadmin:AdminService) {

    }

    @Get()
    getAdmins()
    {
        return this.serviceadmin.getAdmins();
    }

    @Get(':id')
    getadminPago(@Param('id') id:number)
    {
        return this.serviceadmin.getAdmin(id);
    }

    @Post()
    createAdmin(@Body() admin:adminDto)
    {
        return this.serviceadmin.createAdmin(admin);
    }

    @Put(':id')
    updateadmin(@Param('id') id:number,@Body() admin:adminDto)
    {
        return this.serviceadmin.updateAdmin(id,admin);
    }

    @Delete(':id')
    deleteadminPago(@Param('id') id:number)
    {
        return this.serviceadmin.deleteadmin(id);
    }

    @Post('login')
    login(@Body() admin:AdminLoginDto)
    {
        return this.serviceadmin.loginAdmin(admin);
    }
}

