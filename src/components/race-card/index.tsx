import { EventDateItem } from './event-date-item'
import { getMonthFromDate, getDayNumberFromDate } from '../../../utils/date'
import type { Event } from '../../../types/calendar'

export const RaceCard = ({ nextEvent }: { nextEvent?: Event }) => {
	if (!nextEvent) return null

	const month = getMonthFromDate({ date: nextEvent.dates.race })
	const dayInit = getDayNumberFromDate({ date: nextEvent.dates.practice1 })
	const dayEnd = getDayNumberFromDate({ date: nextEvent.dates.race })

	return (
		<article className='flex flex-col gap-2 bg-gray max-w-sm rounded-2xl px-4 py-4 text-green shadow-black'>
			<span className='uppercase font-bold text-white text-xs md:text-base'>Next Race:</span>
			<h2 className='flex flex-col gap-2 text-xl md:text-3xl font-semibold uppercase'>
				<span className='text-balance'>{nextEvent?.name}</span>
				<span className='bg-green text-black px-2 py-1 text-sm md:text-xl font-light w-max border-orange border-2 rounded-md'>
					{month} {dayInit} - {dayEnd}
				</span>
			</h2>
			<ul className='flex flex-col gap-2 my-5'>
				<EventDateItem nameSession='Practice 1' date={nextEvent.dates.practice1} />
				{nextEvent.dates.practice2 && (
					<EventDateItem nameSession='Practice 2' date={nextEvent.dates.practice2} />
				)}
				{nextEvent.dates.practice3 && (
					<EventDateItem nameSession='Practice 3' date={nextEvent.dates.practice3} />
				)}
				<EventDateItem nameSession='Qualifying' date={nextEvent.dates.qualifying} />
				{nextEvent.dates.sprintShootout && (
					<EventDateItem nameSession='Sprint Shootout' date={nextEvent.dates.sprintShootout} />
				)}
				{nextEvent.dates.sprint && (
					<EventDateItem nameSession='Sprint' date={nextEvent.dates.sprint} />
				)}
				<EventDateItem nameSession='Race' date={nextEvent.dates.race} />
			</ul>
			<a
				target='_blank'
				className='bg-white text-black font-semibold px-2 py-1 rounded-2xl w-max shadow-black'
				href={nextEvent?.url}
			>
				Go to the full Schedule
			</a>
		</article>
	)
}
