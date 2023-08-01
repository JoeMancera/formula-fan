import { readDBFile } from "../db"
import { Event } from "../types/calendar"

export const getNextEvent = async () => {

  const events = await readDBFile('schedule') as Event[]
  // get the current event from the array of events
  return events.find((event) => { 
    const now = new Date()
    const eventDate = new Date(event.dates.race)
    return eventDate >= now
  })
}