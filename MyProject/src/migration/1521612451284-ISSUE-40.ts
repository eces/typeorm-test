import {MigrationInterface, QueryRunner} from "typeorm";

export class ISSUE-401521612451284 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    return true
  }
  
  public async down(queryRunner: QueryRunner): Promise<any> {
    return true
  }

}
