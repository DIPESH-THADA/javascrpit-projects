const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline')
const giveaway = document.querySelector('.giveaway')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()


let futureDate = new Date(2025,1,30,20,11,30)

/* const futureDate = new Date(tempDate, tempYear, tempMonth, tempDay + 55, 11, 30, 0) */

const years = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()
const secs = futureDate.getSeconds()
let month = futureDate.getMonth()
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

month = months[month]
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${years} ${hours}:${mins}:${secs} `

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingtime() {
  const today = new Date().getTime()
  const t = futureTime - today
  // values in ms
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMins = 60*1000
  // calculate all values
  let days = t/oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let mins = Math.floor((t % oneHour) / oneMins)
  let secs = Math.floor((t % oneMins) / 1000)

  // set value arry
  const values = [days,hours,mins,secs]

  function format(item) {
    if(item < 10){
      return item = `0${item}`
    }else{
      return item
    }
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
  if(t < 0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
  }
}
// countdown
let countdown = setInterval(getRemainingtime,1000)

getRemainingtime()