const areaCalc = (width, length) => {
    if ( isNaN(width) || isNaN(length) ) {
        throw new Error("Wrong paramaters type. Only numbers accepted")
    } else {
        console.log(width * length)
    }
}

try {
    areaCalc(5, 'r')
} catch (e) {
    console.error(e);
}