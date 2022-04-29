const currentDate = separator => {
    const arr = new Date().toISOString().slice(0, 10).split('-').join(separator);
    console.log(arr);
}

currentDate('/');
currentDate('-');
