import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719082096989 implements MigrationInterface {
    name = 'Default1719082096989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "psychs" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "phone" text NOT NULL, "crp" text NOT NULL, "state" text NOT NULL, CONSTRAINT "PK_75644fa26f195dbc4b1ba7e5353" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evaluations" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "comment" text NOT NULL, "date" date NOT NULL, "psych_id" integer, CONSTRAINT "PK_f683b433eba0e6dae7e19b29e29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "evaluations" ADD CONSTRAINT "FK_a1fb6ff666edaee209315c6b4ec" FOREIGN KEY ("psych_id") REFERENCES "psychs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "forms" ("id" SERIAL NOT NULL,  "name" text NOT NULL,  "email" text NOT NULL, "phone" text NOT NULL, "reason" text NOT NULL, "status" text NOT NULL DEFAULT 'pendente',  CONSTRAINT "PK_90b2ee38b381f17fae8dfe6dba2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointments" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "phone" text NOT NULL, "reason" text NOT NULL, "status" text NOT NULL DEFAULT 'pendente', CONSTRAINT "PK_appointments_id" PRIMARY KEY ("id"))`);
        // tem q por se for daora usar a `psych_id`
        // await queryRunner.query(`ALTER TABLE "appointments" ADD "psych_id" integer`);
        // await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_psych_id" FOREIGN KEY ("psych_id") REFERENCES "psychs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluations" DROP CONSTRAINT "FK_a1fb6ff666edaee209315c6b4ec"`);
        await queryRunner.query(`DROP TABLE "evaluations"`);
        await queryRunner.query(`DROP TABLE "psychs"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "forms"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        // se tiver a parada de remover `psych_id`
        // await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_psych_id"`);
        // await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "psych_id"`);
    }

}
