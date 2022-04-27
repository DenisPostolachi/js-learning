const monthName = date => {
    const month = date.toLocaleString('default', { month: 'long' });
    console.log(month);
}


monthName(new Date(2019, 10, 10));
monthName(new Date(2021, 11, 10));