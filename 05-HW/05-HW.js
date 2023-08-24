function isValidDate(dateString) {
    const dateParts = dateString.split('-');
    if (dateParts.length !== 3) {
        return false;
    }

    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }

    if (month === 2 && day === 29 && ((year % 4 !== 0) || (year % 100 === 0 && year % 400 !== 0))) {
        return false;
    }

    return true;
}


function getDaysDifference(dateFirst, dateSecond) {
    if (typeof dateFirst !== 'string' || typeof dateSecond !== 'string' ||
    !isValidDate(dateFirst) || !isValidDate(dateSecond)) {
    throw new Error('Invalid date format');
}

    const date1 = new Date(dateFirst);
    const date2 = new Date(dateSecond);

    let timeDiff = Math.abs(date1 - date2);
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return dayDiff;
}

getDaysDifference('2004-02-30', '2005-05-22');

module.exports = { getDaysDifference, isValidDate };
