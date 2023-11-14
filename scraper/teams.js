const SELECTORS = {
	teams: '.col-12.col-md-6'
}

const TEAM = {
	name: '.listing-info .name.f1-bold--m',
	drivers: '.listing-team-drivers',
	driverFirstName: '.driver .driver-info',
	driverLastName: '.driver .driver-info',
	points: '.points .f1-wide--s',
	rank: '.listing-standing .rank'
}

export async function getTeams($) {
	const teams = []

	const teamsContent = $(SELECTORS.teams)
	teamsContent.each((_, team) => {
		const teamRank = Number($(team).find(TEAM.rank).text())
		const teamName = $(team).find(TEAM.name).text().trim().replace(/\n/g, '')
		const points = Number($(team).find(TEAM.points).text())

		teams.push({
			name: teamName,
			points,
			rank: teamRank
		})
	})
	console.log(teams)
	return teams
}
