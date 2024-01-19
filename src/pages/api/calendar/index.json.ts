import { readDBFile } from '../../../../db'
import type { Event } from '../../../../types/calendar'

export async function GET() {
	const scheduleEvents = await readDBFile('schedule') as Event[]
	const year = new Date().getFullYear()

	// order events for race Date
	const orderedEvents = scheduleEvents.sort((a, b) => {
		const dateA = new Date(a.dates.race)
		const dateB = new Date(b.dates.race)
		return dateA.getTime() - dateB.getTime()
	})

	return new Response(JSON.stringify({
		description: `This is the endpoint for the calendar. All events for the ${year} season are listed here. The data is sourced from the official Formula 1 website`,
		season: year,
		formula1URL: `https://www.formula1.com/en/racing/${year}.html`,
		events: orderedEvents
	})
	)
}
