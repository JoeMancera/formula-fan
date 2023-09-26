const SELECTORS = {
	nameGP: 'h2.f1--s',
	raceTime: '.row .js-race',
	qualyTime: '.row .js-qualifying',
	practice3Time: '.row .js-practice-3',
	practice2Time: '.row .js-practice-2',
	practice1Time: '.row .js-practice-1',
	sprintTime: '.row .js-sprint',
	sprintShootoutTime: '.row .js-sprint-shootout'
}

const DATA_ATTRIBUTES = {
	startTime: 'start-time',
	endTime: 'end-time',
	gmtOffset: 'gmt-offset'
}

export async function getEventSchedule($, url, nameCircuit) {
	const schedule = []

	const nameGP = $(SELECTORS.nameGP).text()
	const raceTime = $(SELECTORS.raceTime).data(DATA_ATTRIBUTES.startTime)
	const qualifyingTime = $(SELECTORS.qualyTime).data(DATA_ATTRIBUTES.startTime)
	const practice3Time = $(SELECTORS.practice3Time).data(DATA_ATTRIBUTES.startTime)
	const practice2Time = $(SELECTORS.practice2Time).data(DATA_ATTRIBUTES.startTime)
	const practice1Time = $(SELECTORS.practice1Time).data(DATA_ATTRIBUTES.startTime)
	const sprintTime = $(SELECTORS.sprintTime).data(DATA_ATTRIBUTES.startTime)
	const sprintShootoutTime = $(SELECTORS.sprintShootoutTime).data(DATA_ATTRIBUTES.startTime)
	const gtmOffset = $(SELECTORS.raceTime).data(DATA_ATTRIBUTES.gmtOffset)

	schedule.push({
		name: nameGP,
		circuitId: nameCircuit,
		url,
		state: new Date(`${raceTime}${gtmOffset}`) > new Date() ? 'schedule' : 'finished',
		dates: {
			practice1: new Date(`${practice1Time}${gtmOffset}`),
			practice2: practice2Time && new Date(`${practice2Time}${gtmOffset}`),
			practice3: practice3Time && new Date(`${practice3Time}${gtmOffset}`),
			qualifying: new Date(`${qualifyingTime}${gtmOffset}`),
			race: new Date(`${raceTime}${gtmOffset}`),
			sprint: sprintTime && new Date(`${sprintTime}${gtmOffset}`),
			sprintShootout: sprintShootoutTime && new Date(`${sprintShootoutTime}${gtmOffset}`)
		}
	})
	return schedule
}
