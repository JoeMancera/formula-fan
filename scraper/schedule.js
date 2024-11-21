import fetch from 'node-fetch'
import { CURRENT_YEAR } from './utils.js'
import { readDBFile } from '../db/index.js'

export async function getEventSchedule() {
	let schedule = []
	const drivers = []

	const circuits = await readDBFile('circuits')
	const res = await fetch('https://api.jolpi.ca/ergast/f1/current/races/')
	const currentRacesData = await res.json()

	const scheduleData = currentRacesData.MRData.RaceTable.Races

	const baseUrl = `https://www.formula1.com/en/racing/${CURRENT_YEAR}/`
	schedule = scheduleData.map((circuitItem) => {
		const circuitInfo = circuits.find((circuit) => circuit.circuitId === circuitItem.Circuit.circuitId) || {}
		const url = `${baseUrl}${circuitInfo?.circuitNameUrl}.html`

		const raceTime = `${circuitItem.date}T${circuitItem.time}`
		const practice1Time = `${circuitItem.FirstPractice.date}T${circuitItem.FirstPractice.time}`
		const practice2Time = circuitItem.SecondPractice && `${circuitItem.SecondPractice.date}T${circuitItem.SecondPractice.time}`
		const practice3Time = circuitItem.ThirdPractice && `${circuitItem.ThirdPractice.date}T${circuitItem.ThirdPractice.time}`
		const qualifyingTime = `${circuitItem.Qualifying.date}T${circuitItem.Qualifying.time}`
		const sprintTime = circuitItem.Sprint && `${circuitItem.Sprint.date}T${circuitItem.Sprint.time}`
		const sprintShootoutTime = circuitItem.SprintQualifying && `${circuitItem.SprintQualifying.date}T${circuitItem.SprintQualifying.time}`

	return {
			name: circuitItem.raceName,
			shortName: circuitItem.Circuit.Location.locality,
			circuitId: circuitInfo.circuitId ?? 'red_bull_ring',
			url,
			state: raceTime ? new Date(raceTime) > new Date() || raceTime === 'TBC' ? 'schedule' : 'finished' : 'canceled',
			fallbackDate: raceTime,
			dates: {
				practice1: new Date(practice1Time),
				practice2: practice2Time && new Date(practice2Time),
				practice3: practice3Time && new Date(practice3Time),
				qualifying: new Date(qualifyingTime),
				race: new Date(raceTime),
				sprint: sprintTime && new Date(sprintTime),
				sprintShootout: sprintShootoutTime && new Date(sprintShootoutTime)
			},
			results: {
				podium: drivers
				// fullResults
			}
		}
	})

	return schedule
}
