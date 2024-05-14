import { getDayOfWeek, getDaysInMonth, getLastMonthFirstDay, countWeekdaysBetweenDates } from "./index.js";
const myDate = new Date(2024, 3, 2, -15, 0, 0)

test("正常動作", () => {
    expect(getDayOfWeek('2024-05-14', 'ja-JP')).toStrictEqual("火曜日");
    expect(getDayOfWeek('2024-05-14', 'en-US')).toStrictEqual("Tuesday");
    expect(getDaysInMonth(1998, 11)).toStrictEqual(30);
    expect(getLastMonthFirstDay()).toStrictEqual(myDate);
    expect(countWeekdaysBetweenDates("1998-11-01", "1998-12-01")).toStrictEqual(22);
});


