// global-scoped function
function updateGlobalTime() {
    // function-scoped variables
    let utcTime = document.getElementById("utc-time");
    // Calculate UTC time
    const utcHours = new Date().getUTCHours();
    const utcMinutes = new Date().getUTCMinutes();
    const utcSeconds = new Date().getUTCSeconds();

    // checks if UTC hours is greater than 12 or less than 12
    // if utcHours > 12 = true, use 'PM'
    // else, use 'AM'
    const utcAmPm = utcHours >= 12 ? 'PM' : 'AM';

    // modulo will determine what hours in a day are remaining in a 24-hour format, then use those remaining hours to represent the current hour
    // If utcHours is between 0 and 11 (inclusive), it's AM.
    // If utcHours is between 12 and 23 (inclusive), it's PM.
    // the appropriate algorithm to convert 24-hour time to 12-hour time is
    // utcHours % 12
    // for example, if utcHours is 8, it's 8AM
    // however, if utcHours is 15, it's 6PM
    // below, we are checking if there is a remainder, and there isn't,
    // meaning utc % 12 = 0, it is technically midnight, so we use 12.
    const utc12Hour = utcHours % 12 || 12;

    // Format the time strings
    const utcTimeStr = `${utc12Hour}:${utcMinutes}:${utcSeconds} ${utcAmPm}`;

    // Update the HTML
    utcTime.textContent = `UTC Time: ${utcTimeStr}`;
}

function startGlobalTimer() {
    // Update the time every second
    setInterval(updateGlobalTime, 1000);
}

function updateLocalTime() {
    // function-scoped variables
    let pstTime = document.getElementById("local-time");
    // Calculate PST time
    let utcHours = new Date().getUTCHours(); 

    // convert UTChours to PSThours
    const pstHours = utcHours < 7 ? (utcHours - 7) + 24 : utcHours - 7;
    // pstHours is behind utCHours by 7, so we subtract by 7 
    // if utcHours is less than 7, we will get a negative value 
    // we have to add 24 to get the proper 24-hour time
    // else, utcHours is greater than or equal to 7, we simply subtract the 7 hours from utcHours 

    const pstMinutes = new Date().getUTCMinutes();
    const pstSeconds = new Date().getUTCSeconds();

    // checks if UTC hours is greater than 12 or less than 12
    // if utcHours > 12 = true, use 'PM'
    // else, use 'AM'
    const pstAmPm = pstHours >= 12 ? 'PM' : 'AM';

    // modulo will determine what hours in a day are remaining in a 24-hour format, then use those remaining hours to represent the current hour
    // If utcHours is between 0 and 11 (inclusive), it's AM.
    // If utcHours is between 12 and 23 (inclusive), it's PM.
    // the appropriate algorithm to convert 24-hour time to 12-hour time is
    // utcHours % 12
    // for example, if utcHours is 8, it's 8AM
    // however, if utcHours is 15, it's 6PM
    // below, we are checking if there is a remainder, and there isn't,
    // meaning utc % 12 = 0, it is technically midnight, so we use 12.
    const pst12Hour = pstHours % 12 || 12;

    // Format the time strings
    const pstTimeStr = `${pst12Hour}:${pstMinutes}:${pstSeconds} ${pstAmPm}`;

    // Update the HTML
    pstTime.textContent = `PST Time: ${pstTimeStr}`;
}

function startLocalTimer() {
    // Update the local time every second
    setInterval(updateLocalTime, 1000);
}

// setup event listener for global timer button
let button = document.getElementById("globalTimerButton");
button.addEventListener('click', startGlobalTimer);

// setup event listener for local timer button
let button2 = document.getElementById("localTimerButton");
button2.addEventListener('click', startLocalTimer);