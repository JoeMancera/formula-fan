import { readDBFile } from '../db'
import type { Event } from '../types/calendar'

export const getNextEvent = async () => {
	const events = (await readDBFile('schedule')) as Event[]
	//order the events by date
	events.sort((a, b) => {
		const dateA = new Date(a.dates.race)
		const dateB = new Date(b.dates.race)
		return dateA.getTime() - dateB.getTime()
	})
	// get the current event from the array of events
	const nextEvent = events.find((event) => {
		const now = new Date()
		const eventDate = new Date(event.dates.race)
		return eventDate >= now
	})

	return nextEvent ? nextEvent : events[0]
}
