import { Injectable } from '@nestjs/common';
import { ArticleDto } from '../dtos/article.dto';
import { CreateArticleDto } from '../dtos/create-article';
import { ArticleRepository } from '../repositories/article.repository';

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async getAll(): Promise<ArticleDto[]> {
    const articles = await this.articleRepository.find();
    return articles.map(article => new ArticleDto(article));
  }

  async create(article: CreateArticleDto): Promise<ArticleDto> {
    const newArticle = await this.articleRepository.save(this.articleRepository.create(article));
    return new ArticleDto(newArticle);
  }
}
