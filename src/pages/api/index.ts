import { State } from '../../../types/common'

// New API routing API
// Docs: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function get() {
  return { body: JSON.stringify(
    {
      description: 'This is the API for formula fan. Here you can find all the data like calendar, drivers, teams, etc.',
      endpoints: [
        {
          name: 'Calendar',
          endpoint: '/api/calendar',
          description: 'Returns the calendar for the current season',
          state: State.IN_PROGRESS,
        }
      ]
    }
    ) 
  }
}