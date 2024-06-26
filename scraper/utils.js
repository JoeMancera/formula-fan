import * as cheerio from 'cheerio'
import fetch from 'node-fetch'

import { writeDBFile, readDBFile } from '../db/index.js'
import { logError, logInfo, logSuccess } from './log.js'
import { getEventSchedule } from './schedule.js'
import { getChampionship } from './championship.js'
import { getTeams } from './teams.js'
import { getNews } from './news.js'

const BASE_URL = 'https://www.formula1.com'

export const SCRAPINGS = {
	schedule: {
		url: `${BASE_URL}/en/racing`,
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
	}
}

async function urlToContent(url, scraper, name) {
	if (name === 'schedule') {
		// get all circuits from db/circuits.json
		const circuits = await readDBFile('circuits')
		let year = new Date().getFullYear()
		// validate if for current schedule has pending events
		// if not, add 1 to the year to scrape the next year
		// const events = await readDBFile('schedule')
		// const hasPendingEvents = events.some(({ state }) => state === 'schedule')

		// but first, check if the schedule is already available
		// if (!hasPendingEvents) {
			const nextYear = year
			const nextUrl = `https://www.formula1.com/en/racing/${nextYear}/`
			const f1ScheduleResponse = await fetch(nextUrl)

			if (f1ScheduleResponse.status === 200) year = nextYear
		// }

		const baseUrl = `https://www.formula1.com/en/racing/${year}/`
		const urls = circuits.map(({ circuitNameUrl }) => ({
			url: `${baseUrl}${circuitNameUrl}.html`,
			name: circuitNameUrl
		}))

		const contents = await Promise.all(
			urls.map(({ url, name }) => urlToContent(url, scraper, name))
		)

		return contents.flat()
	}
	const $ = url ? await scrape(url) : null
	const content = await scraper($, url, name)
	return content
}
