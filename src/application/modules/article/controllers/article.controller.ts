import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleDto } from '../dtos/article.dto';
import { CreateArticleDto } from '../dtos/create-article';
import { ArticleService } from '../services/article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getArticles(): Promise<ArticleDto[]> {
    const articles = await this.articleService.getAll();
    return articles;
  }

  @Post()
  async createArticle(@Body() article: CreateArticleDto): Promise<ArticleDto> {
    const createdArticle = await this.articleService.create(article);
    return createdArticle;
  }
}
