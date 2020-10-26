export class ArticleDto {
  readonly id: number;
  readonly content: string;

  constructor({ id, content }: { id: number; content: string }) {
    this.id = id;
    this.content = content;
  }
}
