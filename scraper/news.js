// import { scrape } from './utils.js'
const SELECTORS = {
	latestListNews: '#article-list li',
	allNewsItems: 'ul.grid.grid-cols-1 li.group.w-full.list-none'
}

const NEWS = {
	link: 'a.group',
	title: 'p',
	image: 'img'
}

export async function getNews($) {
	const newsList = []

	const newsListContent = $(SELECTORS.allNewsItems)
	newsListContent.each((_, news) => {
		const link = $(news).find(NEWS.link).attr('href')
		const title = $(news).find(NEWS.title).text()
		const image = $(news).find(NEWS.image).attr('src')

		newsList.push({
			link,
			title,
			image
		})
	})
	// TODO: get description from news page
	// console.log('newsList', newsList)

	// const updatedNews = newsList
	// 	.map(async (news) => {
	// 		const newsPageContent = await scrape(news.link).then($ => {
	// 			console.log($('meta[property="og:description"]').attr('content'))
	// 			return $('meta[property="og:description"]').attr('content')
	// 		}).then(description => {
	// 			return description
	// 		})
	// 		return {
	// 			...news,
	// 			description: newsPageContent
	// 		}
	// 	})

	// console.log('updatedNews', updatedNews.map(news => news.description))
	return {
		updatedDate: new Date().toISOString(),
		newsList
	}
}
