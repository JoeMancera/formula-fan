export const getDayFromDate = ({
	date,
	type = 'short'
}: {
	date: string
	type?: 'short' | 'long' | 'narrow'
}) => {
	return new Date(date).toLocaleDateString('en-US', { weekday: type })
}

export const getDayNumberFromDate = ({ date }: { date: string }) => {
	return new Date(date).getDate()
}

export const getHourFromDate = ({ date }: { date: string }) => {
	return new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

export const getMonthFromDate = ({
	date,
	type = 'short'
}: {
	date: string
	type?: 'short' | 'long' | 'narrow'
}) => {
	return new Date(date).toLocaleDateString('en-US', { month: type })
}
