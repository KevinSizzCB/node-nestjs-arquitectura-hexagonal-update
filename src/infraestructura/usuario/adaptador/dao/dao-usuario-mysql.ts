import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';

@Injectable()
export class DaoUsuarioMysql implements DaoUsuario {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) { }

  async listar(): Promise<UsuarioDto[]> {
    return this.entityManager.query('SELECT u.nombre, u.edad FROM USUARIO u');
  }

  /** 
   * Se deben hacer las consultas con PreparedStatements https://dev.to/yoshi_yoshi/typeorm-prevent-sql-injection-with-node-js-react-typescript-in-2021-1go4
   * Esto para tener una protección mínima ante inyecciones sql, NO usar consultas tipo:
   * `SELECT u.nombre, u.edad FROM USUARIO u WHERE id=${id}`.
   * En el método perfil se ve un ejemplo claro de PreparedStatements para una consulta tipo where
   */
  async perfil(id: number): Promise<UsuarioDto[]> {
    return this.entityManager.query(
      `SELECT u.nombre, u.edad FROM USUARIO u WHERE id = $1`,
      [id],
    );
  }
}
