import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1719320914707 implements MigrationInterface {
    name = 'Default1719320914707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms" ADD "phone" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "approach" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "specialty3" text`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "formationArea2" text`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "service3" text`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "gender" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "serviceModality" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "pounds" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "pounds"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "serviceModality"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "service3"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "formationArea2"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "specialty3"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "approach"`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "phone"`);
    }

}
