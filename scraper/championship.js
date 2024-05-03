const SELECTORS = {
  seasonTitle: 'title',
  drivers: '.outline.outline-offset-4.outline-brand-black.group.outline-0'
}

const DRIVER = {
  firstName: 'p.f1-heading.tracking-normal.text-fs-12px.leading-tight.uppercase.font-normal.non-italic.f1-heading__body.font-formulaOne',
  lastName: 'p.f1-heading.tracking-normal.text-fs-18px.leading-tight.uppercase.font-bold.non-italic.f1-heading__body.font-formulaOne',
  url: 'href',
  team: 'p.f1-heading.tracking-normal.text-fs-12px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne.text-greyDark',
  points: 'p.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-18px.leading-none.normal-case',
  rank: 'p.f1-heading-black.font-formulaOne.tracking-normal.font-black.non-italic.text-fs-24px'
}

export async function getChampionship($) {
  const drivers = []

  const seasonTitle = $(SELECTORS.seasonTitle).text()
  const driversContent = $(SELECTORS.drivers)
  driversContent.each((_, driver) => {
    const driverFirstName = $(driver).find(DRIVER.firstName).text()
    const driverLastName = $(driver).find(DRIVER.lastName).text()
    const driverUrl = $(driver).attr(DRIVER.url)
    const driverTeam = $(driver).find(DRIVER.team).text()
    const driverPoints = $(driver).find(DRIVER.points).text()
    const driverRank = $(driver).find(DRIVER.rank).text()

    drivers.push({
      firstName: driverFirstName,
      lastName: driverLastName,
      url: driverUrl,
      team: driverTeam,
      points: Number(driverPoints),
      rank: Number(driverRank)
    })
  })
  return {
    season: seasonTitle,
    data: drivers
  }
}
