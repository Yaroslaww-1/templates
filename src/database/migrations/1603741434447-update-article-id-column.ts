import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateArticleIdColumn1603741434447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE SEQUENCE articles_id_seq
      OWNED BY articles.id;
 
      ALTER TABLE articles
      ALTER COLUMN id SET DEFAULT NEXTVAL('articles_id_seq')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      ALTER TABLE articles
      ALTER COLUMN id TYPE INTEGER
    `);
  }
}
