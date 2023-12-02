/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(dayOfWeek: DayOfWeek): boolean {
  return dayOfWeek === DayOfWeek.Saturday || dayOfWeek === DayOfWeek.Sunday;
}