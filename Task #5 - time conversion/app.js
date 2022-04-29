const timeConvert = n => {
    let num = n;
    let hours = (num / 60);
    let convertedHours = Math.floor(hours);
    let minutes = (hours - convertedHours) * 60;
    let convertedMinutes = Math.round(minutes);
    return num + " minutes = " + convertedHours + " hour(s) and " + convertedMinutes + " minute(s).";
}

console.log(timeConvert(200))


// todo
const timeConvert2 = n => {
    const minutes = n % 60;
    const hours = (n - minutes) / 60

    return n + " minutes = " + hours + " hour(s) and " + minutes + " minute(s).";
}