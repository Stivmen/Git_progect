 let date = {
    hours: 4,
    minutes: 45,
    seconds: 12
 }

function information(info) {
    for (let param in date) {
        console.log(`${param} = ${date[param]}`);
    }
}

 function addSeconds(sec) {
     date.seconds = date.seconds + (sec % 60);
     date.minutes = Math.trunc(date.minutes + (sec / 60));
     date.hours = Math.trunc(date.hours + (sec / 3600));
     if (date.seconds >= 60) {
         date.minutes++;
         date.seconds = date.seconds - 60;
     }
     if(date.minutes >= 60) {
         date.hours++;
         date.minutes = date.minutes - 60;
     }
 }

 function addMinutes(min) {
     date.minutes = date.minutes + (min % 60);
     date.hours = Math.trunc(date.hours + (min / 60));
     if (date.minutes >= 60) {
         date.hours++;
         date.minutes = date.minutes - 60;
     }
     if (date.hours >= 24) {
         date.hours = date.hours - 24;
     }
 }

function addHours(hours) {
    date.hours = date.hours + (hours % 24);
    if (date.hours >= 24) {
        date.hours = date.hours - 24;
    }
}