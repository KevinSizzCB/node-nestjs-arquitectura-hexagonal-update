import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'usuario' })
export class UsuarioEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  nombre: string;

  @Column({ nullable: true, default: 0 })
  edad: number;

  @Column({ nullable: false, default: '' })
  clave: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  fechaCreacion: Date;

  @BeforeInsert()
  async hashPassword() {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    this.clave = await bcrypt.hash(this.clave, salt);
  }
}
