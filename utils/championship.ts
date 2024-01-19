import { readDBFile } from '../db'
import type { Driver } from '../types/championship'

export const getChampionship = async () => {
	const standings = (await readDBFile('championship')) as { data: Driver[] }

	return standings.data.map((driver) => (
		{
			firstName: driver.firstName,
			lastName: driver.lastName,
			url: `https://www.formula1.com/${driver.url}`,
			team: driver.team,
			points: Number(driver.points),
			rank: Number(driver.rank)
		}
	))
}

export const getSeasonChampionship = async () => {
	const seasonTitle = (await readDBFile('championship'))

	return seasonTitle.season

}