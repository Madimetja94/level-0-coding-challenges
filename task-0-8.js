function numToTime(num){
    let hour = 0;
    let minute = 0;
    let word = " hour, ";
    let word2 = " minute";

    hour = Math.floor(num / 60);
    minute = num % 60;

    if(hour > 1)
    {
        word = " hours, "
    }
    if(minute > 1)
    {
        word2 = " minutes";
    }
    if(hour < 1)
    {
        hour = 0;
    }

    return hour + word + minute + word2; 
}