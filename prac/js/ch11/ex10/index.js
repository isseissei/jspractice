
export function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(1998, 11))


export function countWeekdaysBetweenDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        const day = d.getDay();
        if (day != 0 && day != 6) {
            count++;
        }
    }

    return count;
}
console.log(countWeekdaysBetweenDates("1998-11-01", "1998-12-01"))

export function getDayOfWeek(dateString, location) {
    const date = new Date(dateString);
    return date.toLocaleDateString(location, { weekday: 'long' });
}
console.log(getDayOfWeek('2024-05-14', 'ja-JP'));
console.log(getDayOfWeek('2024-05-14', 'en-US'));

export function getLastMonthFirstDay() {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getUTCMonth();
    month -= 1;
    if (month < 0) {
        month = 11; 
        year -= 1; 
    }
    
    const lastMonthFirstDate = new Date(year, month, 2, -15, 0, 0);
    return lastMonthFirstDate;
}



console.log(getLastMonthFirstDay());

