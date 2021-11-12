import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';
import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { servicioRegistrarUsuarioProveedor } from './servicio/servicio-registrar-usuario.proveedor';
import { repositorioUsuarioProvider } from './repositorio/repositorio-usuario.proveedor';
import { daoUsuarioProvider } from './dao/dao-usuario.proveedor';
import { ManejadorRegistrarUsuario } from 'src/aplicacion/usuario/comando/registar-usuario.manejador';
import { ManejadorListarUsuario } from 'src/aplicacion/usuario/consulta/listar-usuarios.manejador';
import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioEntidad } from '../entidad/usuario.entidad';
import { ManejadorPefilUsuario } from 'src/aplicacion/usuario/consulta/perfil-usuarios.manejador';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntidad])],
  providers: [
    repositorioUsuarioProvider,
    daoUsuarioProvider,
    ManejadorRegistrarUsuario,
    ManejadorListarUsuario,
    ManejadorPefilUsuario,
    {
      provide: ServicioRegistrarUsuario,
      inject: [
        RepositorioUsuario,
        /**
         * Si hay mas dependencias para inyectar, tenerlas en cuenta en el useFactory,
         * hacer su respectivo provider y ponerlo antes de su implementación o inyección como dependencia.
         * Ej: RepositorioUsuario es una dependencia de este servicio, y antes de hacer el useFactory 
         * de este servicio se creo el provider RepositorioUsuario que en este caso es repositorioUsuarioProvider
         */
      ],
      useFactory: servicioRegistrarUsuarioProveedor,
    },
  ],
  exports: [
    ServicioRegistrarUsuario,
    ManejadorRegistrarUsuario,
    ManejadorListarUsuario,
    RepositorioUsuario,
    DaoUsuario,
    ManejadorPefilUsuario,
  ],
})
export class UsuarioProveedorModule { }
