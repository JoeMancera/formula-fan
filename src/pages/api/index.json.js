// Reference: https://www.youtube.com/watch?v=IgX3s36dvDk
export async function GET() {
	return {
		body: JSON.stringify({
			description:
				'This is the API for formula fan. Here you can find all the data like calendar, drivers, teams, etc.',
			endpoints: [
				{
					name: 'Calendar',
					endpoint: '/api/calendar.json',
					description: 'Returns the calendar for the current season',
					state: 'Done'
				},
				{
					name: 'Chapionship Standings',
					endpoint: '/api/championship.json',
					description: 'Returns the championship standings for the current season',
					state: 'Done'
				}
			]
		})
	}
}
