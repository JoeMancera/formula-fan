import { Calendar } from "../types/calendar";

export const getNextEvent = async () => {
  // Data fetch
  // Docs: https://nextjs.org/docs/basic-features/data-fetching
  const data = await fetch('http://localhost:3000/api/calendar')
  const calendar = await data.json();

  // get the current event from the array of events
  return (calendar as Calendar).events.find((event) => { 
    const now = new Date()
    const eventDate = new Date(event.dates.race)
    return eventDate >= now
  })
}