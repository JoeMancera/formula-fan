export type News = {
  title: string,
  link: string,
  image: string
}

export type NewsResponse = {
  description: string,
  news: News[]
}