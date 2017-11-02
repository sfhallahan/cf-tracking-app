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
  console.log(Date.parse(date))
  return {
    uid,
    date: Date.parse(date),
    reverseTimestamp: -Date.parse(date), // to retrieve reverse chrono from firebase
    workoutStyle,
    details,
  }
}



const months = ['Jan' , 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatTimelineDate(date) {
  const dateObj = new Date(date)
  return months[dateObj.getMonth()] + " " + dateObj.getDate()

}
