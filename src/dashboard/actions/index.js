export const DAY = 'DAY'

export function dayIndex(data) {
  const action = {
    type: DAY,
    data
  }

  return action
}
