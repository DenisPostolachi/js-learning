const timeConvert = n => {
    let num = n;
    let hours = (num / 60);
    let convertedHours = Math.floor(hours);
    let minutes = (hours - convertedHours) * 60;
    let convertedMinutes = Math.round(minutes);
    return num + " minutes = " + convertedHours + " hour(s) and " + convertedMinutes + " minute(s).";
}

console.log(timeConvert(200));