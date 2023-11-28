const SELECTORS = {
	nameGP: 'h2.f1--s',
	shortNameGP: 'h1',
	raceTime: '.row .js-race',
	qualyTime: '.row .js-qualifying',
	practice3Time: '.row .js-practice-3',
	practice2Time: '.row .js-practice-2',
	practice1Time: '.row .js-practice-1',
	sprintTime: '.row .js-sprint',
	sprintShootoutTime: '.row .js-sprint-shootout',
	podiumListItems: 'ul.f1-podium.f1-color--carbonBlack li',
	fullResults: '.btn.btn--default.d-block.d-md-inline-block'
}

const DATA_ATTRIBUTES = {
	startTime: 'start-time',
	endTime: 'end-time',
	gmtOffset: 'gmt-offset'
}

const PODIUM = {
	driver: 'li .f1-podium--driver.f1--xs',
	driverName: {
		firstName: '.d-none.d-md-inline.f1-capitalize',
		lastName: '.f1-podium--surname.f1-uppercase'
	},
	time: 'li .f1-podium--time.f1-label.f1-bg--gray2.misc--label'
}

export async function getEventSchedule($, url, nameCircuit) {
	const schedule = []
	const drivers = []
	const currentYear = new Date().getFullYear()

	const nameGP = $(SELECTORS.nameGP).text()
	const shortNameGP = $(SELECTORS.shortNameGP).text().replace(String(currentYear), '')
	const raceTime = $(SELECTORS.raceTime).data(DATA_ATTRIBUTES.startTime)
	const qualifyingTime = $(SELECTORS.qualyTime).data(DATA_ATTRIBUTES.startTime)
	const practice3Time = $(SELECTORS.practice3Time).data(DATA_ATTRIBUTES.startTime)
	const practice2Time = $(SELECTORS.practice2Time).data(DATA_ATTRIBUTES.startTime)
	const practice1Time = $(SELECTORS.practice1Time).data(DATA_ATTRIBUTES.startTime)
	const sprintTime = $(SELECTORS.sprintTime).data(DATA_ATTRIBUTES.startTime)
	const sprintShootoutTime = $(SELECTORS.sprintShootoutTime).data(DATA_ATTRIBUTES.startTime)
	const gtmOffset = $(SELECTORS.raceTime).data(DATA_ATTRIBUTES.gmtOffset)
	const fullResults = $(SELECTORS.fullResults).attr('href')
	const podiumListItems = $(SELECTORS.podiumListItems)

	podiumListItems.each((_, podiumItem) => {
		const driverFistName = $(podiumItem).find(PODIUM.driver).find(PODIUM.driverName.firstName).text().trim().replace(/\n/g, '')
		const driverLastName = $(podiumItem).find(PODIUM.driver).find(PODIUM.driverName.lastName).text().trim().replace(/\n/g, '')
		const driver = `${driverFistName} ${driverLastName}`
		const time = $(podiumItem).find(PODIUM.time).text().trim().replace(/\n/g, '')

		drivers.push({
			driver,
			time
		})
	})

	schedule.push({
		name: nameGP,
		shortName: shortNameGP,
		circuitId: nameCircuit,
		url,
		state: raceTime ? new Date(`${raceTime}${gtmOffset}`) > new Date() ? 'schedule' : 'finished' : 'canceled',
		dates: {
			practice1: new Date(`${practice1Time}${gtmOffset}`),
			practice2: practice2Time && new Date(`${practice2Time}${gtmOffset}`),
			practice3: practice3Time && new Date(`${practice3Time}${gtmOffset}`),
			qualifying: new Date(`${qualifyingTime}${gtmOffset}`),
			race: new Date(`${raceTime}${gtmOffset}`),
			sprint: sprintTime && new Date(`${sprintTime}${gtmOffset}`),
			sprintShootout: sprintShootoutTime && new Date(`${sprintShootoutTime}${gtmOffset}`)
		},
		results: {
			podium: drivers,
			fullResults
		}
	})
	return schedule
}
