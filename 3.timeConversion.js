/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
 */

const s1 = "12:01:00PM"; // 12:01:00
const s2 = "07:05:45PM"; // 19:05:45

function timeConversion(s) {
  let isPM = s.endsWith("PM");
  let [hh, mm, ss] = s.split(":").map(v => v.slice(0, 2));
  if (isPM && Number(hh) != 12) hh = Number(hh) + 12;
  else if (!isPM && hh == 12) hh = "00";
  return [hh, mm, ss].join(":");
}

console.log(timeConversion(s1));
console.log(timeConversion(s2));