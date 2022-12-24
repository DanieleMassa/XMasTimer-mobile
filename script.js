var christmas_date = new Date('Dec 25, 2022 00:00:00')

function countdown(){
    var today = new Date()
    var gap = christmas_date - today

    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var day = hours * 24

    var d = Math.floor(gap / (day))
    var h = Math.floor((gap % day) / (hours))
    var m = Math.floor((gap % hours) / (minutes))
    var s = Math.floor((gap % minutes) / (seconds))


    document.getElementById("days").innerHTML = d
    document.getElementById("hours").innerHTML = h
    document.getElementById("minutes").innerHTML = m
    document.getElementById("seconds").innerHTML = s
}

setInterval(()=>{
    countdown()
}, 1000)

