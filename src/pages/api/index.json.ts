// Reference: https://www.youtube.com/watch?v=IgX3s36dvDk
export async function get() {
  return { body: JSON.stringify(
    {
      description: 'This is the API for formula fan. Here you can find all the data like calendar, drivers, teams, etc.',
      endpoints: [
        {
          name: 'Calendar',
          endpoint: '/api/calendar',
          description: 'Returns the calendar for the current season',
          state: 'in progress',
        }
      ]
    }
    ) 
  }
}