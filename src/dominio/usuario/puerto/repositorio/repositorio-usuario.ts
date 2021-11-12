import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';
import { UsuarioEntidad } from 'src/infraestructura/usuario/entidad/usuario.entidad';
import { Usuario } from '../../modelo/usuario';

export abstract class RepositorioUsuario {
  abstract existeNombreUsuario(nombre: string): Promise<boolean>;
  abstract guardar(usuario: Usuario): Promise<UsuarioEntidad>;
}
