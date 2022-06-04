const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');

function updateTime() {
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()

    secondsHand.style.transform = `rotate(${seconds * 6}deg)`
    minutesHand.style.transform = `rotate(${minutes * 6}deg)`
    hoursHand.style.transform = `rotate(${hours * 30}deg)`
}
updateTime()
let interval = setInterval(updateTime, 1000)