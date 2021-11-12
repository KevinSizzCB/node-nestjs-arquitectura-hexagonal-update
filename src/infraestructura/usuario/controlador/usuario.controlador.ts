import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { ComandoRegistrarUsuario } from 'src/aplicacion/usuario/comando/registrar-usuario.comando';
import { ManejadorRegistrarUsuario } from 'src/aplicacion/usuario/comando/registar-usuario.manejador';
import { ManejadorListarUsuario } from 'src/aplicacion/usuario/consulta/listar-usuarios.manejador';
import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';
import { ManejadorPefilUsuario } from 'src/aplicacion/usuario/consulta/perfil-usuarios.manejador';

@Controller('usuario')
export class UsuarioControlador {
  constructor(
    private readonly _manejadorRegistrarUsuario: ManejadorRegistrarUsuario,
    private readonly _manejadorListarUsuario: ManejadorListarUsuario,
    private readonly _manejadorPerfilUsuario: ManejadorPefilUsuario,
  ) { }

  @Post()
  async crear(@Body() comandoRegistrarUsuario: ComandoRegistrarUsuario) {
    return this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario);
  }

  @Get()
  async listar(): Promise<UsuarioDto[]> {
    return this._manejadorListarUsuario.ejecutar();
  }

  @Get(':id')
  async perfil(@Param('id', ParseIntPipe) id: number): Promise<UsuarioDto[]> {
    return this._manejadorPerfilUsuario.ejecutar(id);
  }
}
