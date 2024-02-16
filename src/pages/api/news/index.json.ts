import { readDBFile } from '../../../../db'
import type { NewsResponse } from '../../../../types/news'

export async function GET() {
	const newsData = await readDBFile('news') as NewsResponse[]



	return new Response(JSON.stringify({
		description: `This is the endpoint for the latest news. The data is sourced from the official Formula 1 website.`,
		...newsData
	})
	)
}
