const SELECTORS = {
  drivers: '.col-12.col-md-6.col-lg-4'
}

const DRIVER = {
  firstName: '.d-block.f1--xxs.f1-color--carbonBlack',
  lastName: '.d-block.f1-bold--s.f1-color--carbonBlack',
  url: 'a.listing-item--link',
  team: '.listing-item--team.f1--xxs.f1-color--gray5',
  points: '.points .f1-wide--s',
  rank: '.rank'
}

export async function getChampionship($) {
  const drivers = []

  const driversContent = $(SELECTORS.drivers)
  driversContent.each((_, driver) => {
    const driverFirstName = $(driver).find(DRIVER.firstName).text()
    const driverLastName = $(driver).find(DRIVER.lastName).text()
    const driverUrl = $(driver).find(DRIVER.url).attr('href')
    const driverTeam = $(driver).find(DRIVER.team).text()
    const driverPoints = $(driver).find(DRIVER.points).text()
    const driverRank = $(driver).find(DRIVER.rank).text()

    drivers.push({
      firstName: driverFirstName,
      lastName: driverLastName,
      url: driverUrl,
      team: driverTeam,
      points: driverPoints,
      rank: driverRank
    })
  })
  return drivers
}
