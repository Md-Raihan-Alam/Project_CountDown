const enterTime=document.querySelector('.timeLeft');
//selecting time functions for targated date
let Time=new Date(2023,0,1,0,0,0);
let year=Time.getFullYear();
let hour=Time.getHours();
let min=Time.getMinutes();
let date=Time.getDate();
let month=Time.getMonth();
let day=Time.getDay();
//selection time functions for current date
let currentTime=new Date();
let currentYear=currentTime.getFullYear();
let currentMonth=currentTime.getMonth();
let currentDay=currentTime.getDate();
let finalTime=Time.getTime();
function getRemainingTime(){
    //calculation for turning JS time to human readable time
    const today=new Date().getTime();
    const remainingTime=finalTime-today;
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;
    let days=Math.floor(remainingTime/oneDay);
    let hours=Math.floor((remainingTime%oneDay)/oneHour);
    let minutes=Math.floor((remainingTime%oneHour)/oneMinute);
    let seconds=Math.floor((remainingTime%oneMinute)/1000);
    //update for vlaue less or greater than 10
    let finalDay=days<10 ? `0${days}`:`${days}`;
    let finalHours=hours<10 ? `0${hours}`:`${hours}`;
    let finalMinutes=minutes<10 ? `0${minutes}`:`${minutes}`;
    let finalSeconds=seconds<10 ? `0${seconds}`:`${seconds}`;
    //declaring text for updated time
    if(remainingTime<0){
        enterTime.innerText=`Happy New Year`;
    }else{
       enterTime.innerText=`${finalDay}D:${finalHours}H:${finalMinutes}M:${finalSeconds}S`;
    }
}
//use of setInterval
setInterval(getRemainingTime,100);