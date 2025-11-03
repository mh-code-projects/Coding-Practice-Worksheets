/*
==================================================
Section 1: Reference: Quick Guide for the Date Object
==================================================
*/

/*
Date Object Creation and Retrieval:
    The Date object is used to work with dates and times. It stores the number of milliseconds
    since January 1, 1970, 00:00:00 UTC (the Unix Epoch).

    Creation Syntax:
        1. Current Date/Time:
            const now = new Date();

        2. Specific Date (YYYY, M-1, D, H, M, S, MS):
            Months are ZERO-INDEXED (0 = January, 11 = December).
            const christmas = new Date(2025, 11, 25); // December 25, 2025

        3. From Milliseconds:
            const epoch = new Date(0); // Jan 1, 1970 UTC

    Common Get Methods (all return numbers):
        .getFullYear(): Gets the year (4 digits, e.g., 2025).
        .getMonth(): Gets the month (0-11, where 0 is Jan).
        .getDate(): Gets the day of the month (1-31).
        .getDay(): Gets the day of the week (0-6, where 0 is Sunday).
        .getHours(): Gets the hour (0-23).
        .getMinutes(): Gets the minute (0-59).
        .getTime(): Gets the time in milliseconds since the Unix Epoch.

    Common Set Methods (modify the date object):
        .setFullYear(year, [month, day]): Sets the year.
        .setHours(hour, [min, sec, ms]): Sets the hour.
        .setDate(dayOfMonth): Sets the day of the month.

    Key Constants for Time Calculations (in milliseconds):
        const MS_PER_SECOND = 1000;
        const MS_PER_MINUTE = 60 * MS_PER_SECOND;
        const MS_PER_HOUR = 60 * MS_PER_MINUTE;
        const MS_PER_DAY = 24 * MS_PER_HOUR;
*/

/*
==================================================
Section 2: Sample Data
==================================================
*/

// Define the time constants we will use for calculations.
const MS_PER_HOUR = 3600000;
const MS_PER_DAY = 86400000;

// Set a fixed past date for comparison problems
const dueDate = new Date(2025, 9, 30, 17, 0, 0); // October 30, 2025, 5:00 PM

/*
==================================================
Section 3: Challenge Prompts/Questions
==================================================
*/

// --- CREATION CHALLENGES (1-3) ---

// Prompt 1: Create a variable named 'today' and initialize it with the current date and time using the Date object constructor.
let today = new Date()

// Prompt 2: Create a variable named 'newYearsDay' representing January 1st of next year (2026).
// Reminder: The month is ZERO-INDEXED (0 = January).
const newYearsDay = new Date(2026, 0, 1);

// Prompt 3: Create a variable named 'pastDate' that represents exactly 500,000,000,000 (500 billion) milliseconds after the Unix Epoch (Jan 1, 1970).
const pastDate = new Date(5000000000000);

// Use the 'today' variable you created in Prompt 1 for these challenges.
// Prompt 4: Create a variable 'currentYear' and assign it the four-digit year from the 'today' object.
const currentYear = today.getFullYear();

// Prompt 5: Create a variable 'currentMonthIndex' and assign it the zero-based month index (0-11) from the 'today' object.
const currentMonthIndex = today.getMonth();

// Prompt 6: Create a variable 'currentDayNameIndex' and assign it the day of the week index (0-6) from the 'today' object.
// B) After you've done that, create a variable 'dayNames' as an array of strings: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].
// C) Finally, create a variable 'currentDayName' and use the 'currentDayNameIndex' to retrieve the actual name from the 'dayNames' array.
const currentDayNameIndex = today.getDay();
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const currentDayName = dayNames[currentDayNameIndex];

// Prompt 7: Create a variable 'timeInMilliseconds' and assign it the number of milliseconds that have passed since the Unix Epoch (Jan 1, 1970) up to 'today'.

const timeInMilliseconds = (new Date()).getTime();
console.log(timeInMilliseconds);

// --- BASIC FORMATTING (8-10) ---

// Prompt 8: Create a variable 'simpleDate' and assign it a nicely formatted date string (e.g., "Tue Oct 21 2025") from the 'today' object.

// Prompt 9: Create a variable 'localeDate' and assign it a locale-specific date string (e.g., "10/21/2025") from the 'today' object.

// Prompt 10: Create a variable 'customDisplay' that combines the current hour and current minute (retrieved separately using .getHours() and .getMinutes()) into a custom formatted string like "Current Time: 20:05 (HH:MM)".

// ----------------------------------------------------------------

// --- ADVANCED CALCULATION & UTILITY CHALLENGES (11-20) ---

// Prompt 11: Create a variable 'isFuture' that checks if 'newYearsDay' (from Prompt 2) is a date in the future relative to 'today' (from Prompt 1).
// B) Compare the raw millisecond values using .getTime() on both dates.

// Prompt 12: Create a variable 'timeDifferenceMs' that calculates the absolute difference in milliseconds between 'newYearsDay' and 'today'.
// C) Use Math.abs() on the result of: newYearsDay.getTime() - today.getTime()

// Prompt 13: Convert 'timeDifferenceMs' (from Prompt 12) into the total number of **hours**. Store the result in 'hoursUntilNewYear'.
// C) Use the MS_PER_HOUR constant defined in the Sample Data.

// Prompt 14: Convert 'timeDifferenceMs' (from Prompt 12) into the total number of **full days**. Store the result in 'fullDaysUntilNewYear'.
// C) Use the MS_PER_DAY constant and the Math.floor() method to get a whole number.

// Prompt 15: Create an arrow function named 'isOverdue' that takes one date object (like 'dueDate') as a parameter.
// B) The function should return **true** if the input date is *before* 'today', and **false** otherwise.
// C) Use the concise body syntax and compare the date's .getTime() value to today's .getTime() value.

// Prompt 16: Create a new Date object named 'nextMonth' by cloning 'today' and using the **.setMonth()** method to advance the month by exactly 1.
// B) Make a copy of 'today' first: new Date(today.getTime())
// C) HINT: newDate.setMonth(currentMonthIndex + 1)

// Prompt 17: Create a new Date object named 'midnightTonight' by cloning 'today' and using the **.setHours()** method to set the time to exactly **0, 0, 0, 0** (midnight at the start of today).
// B) You will use this to calculate time remaining in the day.

// Prompt 18: Create a variable named 'timeElapsedTodayMs' that calculates the number of milliseconds that have passed *since* 'midnightTonight' (Prompt 17) *until* 'today'.
// C) Subtract midnightTonight.getTime() from today.getTime().

// Prompt 19: Create a variable named 'isWeekend' that checks if 'today' is a Saturday (index 6) or a Sunday (index 0).
// B) Use the **.getDay()** method and logical operators (||) to get a boolean result.

// Prompt 20: Create an arrow function named 'formatRelativeTime' that takes one parameter, 'dateObject'.
// B) Inside the function, calculate the difference in days between 'dateObject' and 'today' (use Math.floor and MS_PER_DAY).
// C) If the difference is **0**, return the string: "Today".
// D) If the difference is **1**, return the string: "Tomorrow".
// E) Otherwise (if difference > 1), return the string: `In ${difference} days`.
// F) Use the 'newYearsDay' to test your function after creation.