const addYears = plusYear => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let c = new Date(year + plusYear, month, day);
    console.log(c);
}

addYears(10);