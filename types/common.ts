export type Data = {
	description: string
	endpoints: Endpoint[]
}

export type Endpoint = {
	name: string
	endpoint: string
	description: string
	state: State
}

export enum State {
	IN_PROGRESS = 'in progress',
	FINISHED = 'finished',
	COMING_SOON = 'coming soon'
}
