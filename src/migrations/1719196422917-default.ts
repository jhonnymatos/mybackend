import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719196422917 implements MigrationInterface {
    name = 'Default1719196422917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluations" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "evaluations" ADD CONSTRAINT "FK_3d371b1ebe55ca4c60cbf66fa0e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluations" DROP CONSTRAINT "FK_3d371b1ebe55ca4c60cbf66fa0e"`);
        await queryRunner.query(`ALTER TABLE "evaluations" DROP COLUMN "user_id"`);
    }

}
