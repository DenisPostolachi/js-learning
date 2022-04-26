const extractCurrencyValue = (val) => Number(val.replace(/[a-zA-Z$€]+/, ''))
console.log(extractCurrencyValue('€120'));