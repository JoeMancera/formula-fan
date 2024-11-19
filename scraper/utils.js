import * as cheerio from 'cheerio'
import fetch from 'node-fetch'

import { writeDBFile } from '../db/index.js'
import { logError, logInfo, logSuccess } from './log.js'
import { getEventSchedule } from './schedule.js'
import { getChampionship } from './championship.js'
import { getTeams } from './teams.js'
import { getNews } from './news.js'

export const BASE_URL = 'https://www.formula1.com'
export const CURRENT_YEAR = new Date().getFullYear()

export const SCRAPINGS = {
	schedule: {
		scraper: getEventSchedule
	},
	championship: {
		url: `${BASE_URL}/en/drivers.html`,
		scraper: getChampionship
	},
	teams: {
		url: `${BASE_URL}/en/teams.html`,
		scraper: getTeams
	},
	news: {
		url: `${BASE_URL}/en/latest/all?articleFilters=News&page=1`,
		scraper: getNews
	}
}

export const cleanText = (text) =>
	text
		.replace(/\t|\n|\s:/g, '')
		.replace(/.*:/g, ' ')
		.trim()

export async function scrape(url) {
	const res = await fetch(url)
	const html = await res.text()
	return cheerio.load(html)
}

export async function scrapeAndSave(name) {
	const start = performance.now()

	try {
		const { scraper, url } = SCRAPINGS[name]
		logInfo(`Scraping [${name}]...`)
		const content = await urlToContent(url, scraper, name)
		logSuccess(`[${name}] scraped successfully`)

		logInfo(`Writing [${name}] to database...`)
		await writeDBFile(name, content)
		logSuccess(`[${name}] written successfully`)
	} catch (e) {
		logError(`Error scraping [${name}]`)
		logError(e)
	} finally {
		const end = performance.now()
		const time = (end - start) / 1000
		logInfo(`[${name}] scraped in ${time} seconds`)
		process.exit()
	}
}

async function urlToContent(url, scraper, name) {
	const $ = url ? await scrape(url) : null
	const content = await scraper($, url, name)
	return content
}
