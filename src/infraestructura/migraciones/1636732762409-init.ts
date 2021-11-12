import {MigrationInterface, QueryRunner} from "typeorm";

export class init1636732762409 implements MigrationInterface {
    name = 'init1636732762409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL DEFAULT '', "edad" integer DEFAULT '0', "clave" character varying NOT NULL DEFAULT '', "fechaCreacion" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
