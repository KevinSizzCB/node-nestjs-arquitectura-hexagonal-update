import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';
import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';

@Injectable()
export class RepositorioUsuarioMysql implements RepositorioUsuario {
  constructor(
    @InjectRepository(UsuarioEntidad)
    private readonly repositorio: Repository<UsuarioEntidad>,
  ) { }

  async existeNombreUsuario(nombre: string): Promise<boolean> {
    return (await this.repositorio.count({ nombre })) > 0;
  }

  async guardar(usuario: Usuario): Promise<UsuarioEntidad> {
    const entidad = new UsuarioEntidad();
    entidad.clave = usuario.clave;
    entidad.fechaCreacion = usuario.fechaCreacion;
    entidad.nombre = usuario.nombre;
    return await this.repositorio.save(entidad);
  }
}
