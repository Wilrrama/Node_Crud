import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntity1694805245929 implements MigrationInterface {
    name = 'ProductEntity1694805245929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "description" text, "stock" integer NOT NULL DEFAULT '1', "price" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "deleteAt" date, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
