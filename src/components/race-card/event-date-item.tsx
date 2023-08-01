import { getDayFromDate, getHourFromDate } from "../../../utils/date"

export type EventDateItemProps = {
  nameSession: string
  date: string
}
export const EventDateItem = ({ nameSession, date }:EventDateItemProps) => {
  const dayDate = getDayFromDate({date})
  const hourDate = getHourFromDate({date})
  return (
    <li className="font-medium flex justify-between items-center">
      <span style={{flex: '0 0 28%'}}  >{nameSession}</span>
      <span className="opacity-75"  >{dayDate}</span>
      <span className="bg-orange bg-opacity-75 text-white px-2 py-1 rounded-md"  >{hourDate}</span>
    </li>
  )
}