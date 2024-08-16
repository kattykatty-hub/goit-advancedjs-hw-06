enum DayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Sunday || day === DayOfWeek.Saturday;
}

console.log(isWeekend(DayOfWeek.Sunday)); // true
console.log(isWeekend(DayOfWeek.Monday)); // false
