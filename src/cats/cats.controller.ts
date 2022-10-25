import { Controller, Get, Req, Request, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action return a #${id} cat`;
  }
}

// サブドメインルーティング
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
