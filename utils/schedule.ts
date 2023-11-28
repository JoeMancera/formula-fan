import { readDBFile } from '../db'
import type { Event } from '../types/calendar'

export const getNextEvent = async () => {
	const events = (await readDBFile('schedule')) as Event[]
	// get the current event from the array of events
	const nextEvent = events.find((event) => {
		const now = new Date()
		const eventDate = new Date(event.dates.race)
		return eventDate >= now
	})

	return nextEvent ? nextEvent : events[events.length - 1]
}
