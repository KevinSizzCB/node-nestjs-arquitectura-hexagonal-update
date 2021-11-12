import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsuarioModule } from './usuario/usuario.module';
import { AppLogger } from './configuracion/ceiba-logger.service';
import { NodeEnv } from './configuracion/environment/env-node.enum';
import { databaseConfigFactory } from './configuracion/database.config';

@Module({
  providers: [AppLogger],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfigFactory,
      inject: [ConfigService],
    }),
    UsuarioModule,
  ],
})
export class InfraestructuraModule {
}
