import { EventDateItem } from './event-date-item'
import type { Event } from '../../../types/calendar'

export const RaceCard = ({ nextEvent, showNextRaceLabel = true }: { nextEvent?: Event, showNextRaceLabel?: boolean }) => {
	if (!nextEvent) return null

	return (
		<article className='flex flex-col gap-2 max-w-sm min-w-[335px] rounded-2xl p-4 text-white bg-gray'>
			{showNextRaceLabel && <span className='uppercase font-bold text-yellow text-xs md:text-base'>Next Race:</span>}
			<h2 className='flex flex-col gap-2 text-xl md:text-3xl font-semibold uppercase'>
				<span className='text-balance'>{nextEvent?.name}</span>
				<span className='text-sm md:text-xl w-max text-white font-light'>
					{nextEvent.fallbackDate}
				</span>
			</h2>
			{nextEvent.dates.race && <ul className='flex flex-col gap-4 my-5'>
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
			</ul>}
			<a
				target={!showNextRaceLabel ? '_blank' : null}
				className='bg-white text-black font-semibold px-2 py-1 rounded-2xl w-max border-black border-2'
				href={!showNextRaceLabel ? nextEvent?.url : `calendar/${nextEvent?.circuitId}`}
			>
				{!showNextRaceLabel ? 'Go to the F1 page schedule' : 'Go to the full Schedule'}

			</a>
		</article>
	)
}
