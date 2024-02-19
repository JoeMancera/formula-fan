import { getDayFromDate, getHourFromDate } from '../../../utils/date'

export type EventDateItemProps = {
	nameSession: string
	date: string
}
export const EventDateItem = ({ nameSession, date }: EventDateItemProps) => {
	const dayDate = getDayFromDate({ date })
	const hourDate = getHourFromDate({ date })
	return (
		<li className='font-semibold flex justify-between items-center px-2 py-1 border-b border-white border-opacity-40'>
			<span className='' style={{ flex: '0 0 28%' }}>{nameSession}</span>
			<span className='text-success font-light'>{dayDate}</span>
			<span className='text-orange'>{hourDate}</span>
		</li>
	)
}
