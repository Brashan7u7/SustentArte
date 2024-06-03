import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entity/admin.entity';
import { AdminController } from './admin.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers:[AdminController],
    providers: [AdminService],
    exports: [AdminService]
})
export class AdminModule {
    constructor(private readonly adminService: AdminService) {}
    onModuleInit() {
      //Crear el primer usuario superAdmin si no existe
      this.adminService.crearPrimerUsuario();
    }
}
