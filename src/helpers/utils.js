export function getDefaultDateValue(date) {
  const dateObj = new Date(date)
  let day = String(dateObj.getDate())
  let month = String(dateObj.getMonth() + 1)
  const year = String(dateObj.getFullYear())

  if (day.length === 1) {
    day = "0" + day
  }
  if (month.length === 1) {
    month = "0" + month
  }

  return`${year}-${month}-${day}`
}

export function formatUserInfo ( name, avatar, uid ) {
  return {
    name,
    avatar,
    uid,
  }
}

export function formatUserWorkout(uid, date, workoutStyle, details) {
  return {
    uid,
    date,
    workoutStyle,
    details,
  }
}
