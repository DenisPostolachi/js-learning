const dateCompare = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if(date1 > date2){
        console.log(`${d1} is greater than ${d2}`)
    } else if(date1 < date2){
        console.log(`${d2} is greater than ${d1}`)
    } else{
        console.log(`Both dates are equal`)
    }
}

dateCompare("6/11/2020", "7/8/2019");
dateCompare("01/01/2021", "01/01/2021");