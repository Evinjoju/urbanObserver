// src/data/loadArticles.ts
import fs from 'fs'
import path from 'path'
import { Article } from '../types/Article'

const articlesDirectory = path.join(process.cwd(), 'src/articles')

export interface TopArticle extends Article {
  rank: number
}

const articleFiles = fs.readdirSync(articlesDirectory).filter(file => file.endsWith('.json'))

const rawArticles = articleFiles.map(file => {
  const fullPath = path.join(articlesDirectory, file)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const article = JSON.parse(fileContents) as Article
  return { ...article, slug: article.slug || file.replace('.json', '') }
})

export const allArticles: Article[] = rawArticles.sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const top5Articles: TopArticle[] = allArticles
  .slice(0, 5)
  .map((article, index) => ({ ...article, rank: index + 1 }))