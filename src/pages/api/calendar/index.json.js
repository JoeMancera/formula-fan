import { readDBFile } from '../../../../db'

export async function GET() {
	const scheduleEvents = await readDBFile('schedule')
	const year = new Date().getFullYear()

	return new Response(JSON.stringify({
		description: `This is the endpoint for the calendar. All events for the ${year} season are listed here. The data is sourced from the official Formula 1 website`,
		season: year,
		formula1URL: `https://www.formula1.com/en/racing/${year}.html`,
		events: scheduleEvents
	})
	)
}
