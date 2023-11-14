import { readDBFile } from '../db'
import type { Team } from '../types/team'

export const getTeams = async () => {
	const teams = (await readDBFile('teams')) as Team[]

	return teams
}
