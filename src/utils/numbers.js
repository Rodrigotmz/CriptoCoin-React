const parseFloatNumber = (number, afterPoint = 2) =>{
    const result = parseFloat(number).toFixed(afterPoint);
    return result === 'NaN' ? '-' : result;
}

const formatMoney = (value, currency = 'USD', format = 'en-US') => {
    return new Intl.NumberFormat(format, {
        style: 'currency',
        currency: currency
    }).format(value);
};

const validatePositive = (number) =>{
    const numberConvert = parseFloatNumber(number);
    if (numberConvert === 'NaN') return 'positive';
    return number > 0 ? 'positive' : 'negative';
}

export { parseFloatNumber, formatMoney, validatePositive }