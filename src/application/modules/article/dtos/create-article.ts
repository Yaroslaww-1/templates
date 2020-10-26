export class CreateArticleDto {
  readonly content: string;

  constructor({ content }: { content: string }) {
    this.content = content;
  }
}
