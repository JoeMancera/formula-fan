export type Calendar = {
	description: string
	season: number
	formula1URL: string
	events: Event[]
}

export type State = 'schedule' | 'inProgress' | 'finished' | 'canceled'

export type Podium = {
	driver: string,
	time: string
}

export type Results = {
	podium: [Podium, Podium, Podium]
	fullResults: "string"
}

export type Event = {
	name: string
	shortName: string
	circuitId: string
	state: State
	url: string
	fallbackDate: string
	results: Results
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
