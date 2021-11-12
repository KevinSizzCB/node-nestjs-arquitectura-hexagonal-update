import { RepositorioUsuario } from '../puerto/repositorio/repositorio-usuario';
import { Usuario } from '../modelo/usuario';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioRegistrarUsuario {
  constructor(private readonly _repositorioUsuario: RepositorioUsuario) { }
  private readonly successMessage = 'El usuario ha sido creado';

  async ejecutar(usuario: Usuario) {
    if (await this._repositorioUsuario.existeNombreUsuario(usuario.nombre)) {
      throw new ErrorDeNegocio(
        `El nombre de usuario ${usuario.nombre} ya existe`,
      );
    }
    await this._repositorioUsuario.guardar(usuario);
    return this.successMessage;
  }
}
