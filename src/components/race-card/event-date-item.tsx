import { getDayFromDate, getHourFromDate } from '../../../utils/date'

export type EventDateItemProps = {
	nameSession: string
	date: string
}
export const EventDateItem = ({ nameSession, date }: EventDateItemProps) => {
	const dayDate = getDayFromDate({ date })
	const hourDate = getHourFromDate({ date })
	return (
		<li className='font-semibold flex justify-between items-center bg-yellow px-2 py-1 border-black border-2 shadow-black-sm text-black'>
			<span className='' style={{ flex: '0 0 28%' }}>{nameSession}</span>
			<span className='text-gray'>{dayDate}</span>
			<span className='text-red'>{hourDate}</span>
		</li>
	)
}
