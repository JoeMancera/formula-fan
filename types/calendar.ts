export type Calendar = {
	description: string
	season: number
	formula1URL: string
	events: Event[]
}

export type State = 'schedule' | 'inProgress' | 'finished' | 'cancelled'

export type Event = {
	name: string
	circuitId: string
	state: State
	url: string
	dates: {
		practice1: string
		practice2?: string
		practice3?: string
		qualifying: string
		sprintShootout?: string
		sprint?: string
		race: string
	}
}
