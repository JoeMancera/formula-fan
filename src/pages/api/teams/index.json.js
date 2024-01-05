import { readDBFile } from '../../../../db'

export async function GET() {
	const teamsData = await readDBFile('teams')
	const year = new Date().getFullYear()

	return new Response(JSON.stringify({
		description: 'This is the endpoint for the teams standings. The data is sourced from the official Formula 1 website',
		season: year,
		formula1URL: 'https://www.formula1.com/en/teams.html',
		data: teamsData
	})
	)
}
