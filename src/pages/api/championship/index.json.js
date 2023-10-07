import { readDBFile } from '../../../../db'

export async function GET() {
	const championshipData = await readDBFile('championship')
	const year = new Date().getFullYear()

	return {
		body: JSON.stringify({
			description: 'This is the endpoint for the championship standings. The data is sourced from the official Formula 1 website',
			season: year,
			formula1URL: 'https://www.formula1.com/en/drivers.html',
			data: championshipData
		})
	}
}
