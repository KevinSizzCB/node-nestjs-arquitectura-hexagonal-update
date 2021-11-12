import { Injectable } from '@nestjs/common';

import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';

@Injectable()
export class ManejadorPefilUsuario {
  constructor(private _daoUsuario: DaoUsuario) { }

  async ejecutar(id: number): Promise<UsuarioDto[]> {
    return this._daoUsuario.perfil(id);
  }
}
