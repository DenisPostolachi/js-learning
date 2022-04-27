const currentDate = separator => {
    console.log(new Date().toJSON().slice(0, 10).replace(/-/g, separator));
}

currentDate('/');
currentDate('-');
