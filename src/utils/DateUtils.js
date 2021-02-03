import DateLanguages from '../ml/date/DateLanguages'

/**
 * Validates a date object
 * @param {Date} date - an object instantiated with the new Date constructor
 * @return {Boolean}
 */
export function isValidDate(date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return false
  }
  return !isNaN(date.getTime())
}

/**
 * Return abbreviated week day name
 * @return {String}
 * @param date
 * @param days
 */
export function getDayNameAbbr(date, days) {
  if (typeof date !== 'object') {
    throw TypeError('Invalid Type')
  }
  return days[date.getDay()]
}

/**
 * Return name of the month
 * @return {String}
 * @param month
 * @param months
 */
export function getMonthName(month, months) {
  if (!months) {
    throw Error('missing 2nd parameter Months array')
  }
  if (typeof month === 'object') {
    return months[month.getMonth()]
  }
  if (typeof month === 'number') {
    return months[month]
  }
  throw TypeError('Invalid type')
}

/**
 * Return an abbreviated version of the month
 * @return {String}
 * @param month
 * @param monthsAbbr
 */
export function getMonthNameAbbr(month, monthsAbbr) {
  if (!monthsAbbr) {
    throw Error('missing 2nd paramter Months array')
  }
  if (typeof month === 'object') {
    return monthsAbbr[month.getMonth()]
  }
  if (typeof month === 'number') {
    return monthsAbbr[month]
  }
  throw TypeError('Invalid type')
}

/**
 * Alternative get total number of days in month
 * @param {Number} year
 * @param month
 * @return {Number}
 */
export function daysInMonth(year, month) {
  return /8|3|5|10/.test(month) ? 30 : month === 1 ? (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28 : 31
}

/**
 * Get nth suffix for date
 * @param {Number} day
 * @return {String}
 */
export function getNthSuffix(day) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return 'st'
    case 2:
    case 22:
      return 'nd'
    case 3:
    case 23:
      return 'rd'
    default:
      return 'th'
  }
}

/**
 * Formats date object
 * @return {String}
 * @param date
 * @param format
 * @param translation
 */
export function formatDate(date, format, translation) {
  translation = (!translation) ? DateLanguages.translations.en : DateLanguages.translations[translation]

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return format
    .replace(/dd/, ('0' + day).slice(-2))
    .replace(/d/, day)
    .replace(/yyyy/, year)
    .replace(/yy/, String(year).slice(2))
    .replace(/MMMM/, this.getMonthName(date.getMonth(), translation.months.original))
    .replace(/MMM/, this.getMonthNameAbbr(date.getMonth(), translation.months.abbr))
    .replace(/MM/, ('0' + month).slice(-2))
    .replace(/M(?!a|ä)/, month)
    .replace(/su/, this.getNthSuffix(date.getDate()))
    .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days))
}

/**
 * Creates an array of dates for each day in between two dates.
 * @param {Date} start
 * @param {Date} end
 * @return {Array}
 */
export function createDateArray(start, end) {
  let dates = []
  while (start <= end) {
    dates.push(new Date(start))
    start = new Date(start).setDate(new Date(start).getDate() + 1)
  }
  return dates
}

export const getYearItems = (startYear = null, endYear = null, options = []) => {
  startYear = startYear || 1920;
  endYear = endYear || new Date().getFullYear();

  if(Object.keys(options).length) {
    if(options.hasOwnProperty('addEndYear')) {
      endYear += options.addEndYear;
    }
    if(options.hasOwnProperty('subEndYear')) {
      endYear -= options.subEndYear;
    }
    if(options.hasOwnProperty('addStartYear')) {
      startYear += options.addStartYear;
    }
    if(options.hasOwnProperty('subStartYear')) {
      startYear -= options.subStartYear;
    }
  }

  let years = [];
  while (endYear >= startYear) {
    let year = endYear--;
    years.push({
      value: year,
      label: year,
    })
  }

  return years;
}

export const getDayItems = () => {
  let days = [];
  let day = 1;
  while (day <= 31 ) {
    let d = day++;
    days.push({
      value: d,
      label: d < 10 ? `0${d}` : d,
    })
  }

  return days;
}

export const getMonthItems = () => {
  let months = [];
  let month = 1;
  while (month <= 12 ) {
    let m = month++;
    months.push({
      value: m,
      label: m < 10 ? `0${m}` : m,
    })
  }

  return months;
}