import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { RepositorioUsuPostgreSQL } from 'src/infraestructura/usuario/adaptador/repositorio/repositorio-usuario-postgresql';

export const repositorioUsuarioProvider = {
  provide: RepositorioUsuario,
  useClass: RepositorioUsuPostgreSQL,
};
