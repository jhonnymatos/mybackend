import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719404387724 implements MigrationInterface {
    name = 'Default1719404387724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "appointment" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "phone" text NOT NULL, "reason" text NOT NULL, "status" text NOT NULL, "psych_id" integer, "user_id" integer, CONSTRAINT "UQ_af5eb427522ef1580f30f209170" UNIQUE ("email"), CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "psychs" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "phone" text NOT NULL, "crp" text NOT NULL, "state" text NOT NULL, CONSTRAINT "UQ_e0682fa4bf0b4ce09a3fbeb90c7" UNIQUE ("email"), CONSTRAINT "PK_75644fa26f195dbc4b1ba7e5353" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "evaluations" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "comment" text NOT NULL, "date" date NOT NULL, "psych_id" integer, "user_id" integer, CONSTRAINT "PK_f683b433eba0e6dae7e19b29e29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "forms" ("id" SERIAL NOT NULL, "fullName" text NOT NULL, "email" text NOT NULL, "phone" text NOT NULL, "state" text NOT NULL, "crp" text NOT NULL, "approach" text NOT NULL, "specialty" text NOT NULL, "specialty2" text, "specialty3" text, "formation" text NOT NULL, "formationArea" text NOT NULL, "formationArea2" text, "service" text NOT NULL, "service2" text, "service3" text, "gender" text NOT NULL, "serviceModality" text NOT NULL, "pounds" text NOT NULL, "shortBio" text NOT NULL, "fullBio" text NOT NULL, CONSTRAINT "PK_ba062fd30b06814a60756f233da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_d2f9ce05aea074a7a68d1480abd" FOREIGN KEY ("psych_id") REFERENCES "psychs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_15d50a87502380623ff0c27e458" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluations" ADD CONSTRAINT "FK_a1fb6ff666edaee209315c6b4ec" FOREIGN KEY ("psych_id") REFERENCES "psychs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluations" ADD CONSTRAINT "FK_3d371b1ebe55ca4c60cbf66fa0e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluations" DROP CONSTRAINT "FK_3d371b1ebe55ca4c60cbf66fa0e"`);
        await queryRunner.query(`ALTER TABLE "evaluations" DROP CONSTRAINT "FK_a1fb6ff666edaee209315c6b4ec"`);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_15d50a87502380623ff0c27e458"`);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_d2f9ce05aea074a7a68d1480abd"`);
        await queryRunner.query(`DROP TABLE "forms"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "evaluations"`);
        await queryRunner.query(`DROP TABLE "psychs"`);
        await queryRunner.query(`DROP TABLE "appointment"`);
    }

}
