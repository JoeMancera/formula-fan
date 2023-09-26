import { Hono } from 'hono'
import { cors } from 'hono/cors'

import { State } from '../types/common'

const app = new Hono()
app.use(cors({ origin: '*' }))
app.use('*', (ctx) => {
	ctx.json({
		description:
			'This is the API for formula fan. Here you can find all the data like calendar, drivers, teams, etc.',
		endpoints: [
			{
				name: 'Calendar',
				endpoint: '/api/calendar',
				description: 'Returns the calendar for the current season',
				state: State.IN_PROGRESS
			}
		]
	})
})
