var date = new Date();
 var day = date.getDay();
 var Daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var prepand = (hour <= 12) ? "AM" : "PM";

hour = (hour >=12)? hour - 12: hour;
if(hour===0 && prepand==="PM"){
    if(minutes===0 && seconds===0){
        hour=12;prepand="Noon";
    }else{
        hour=12;prepand="PM";
    }
}
if(hour===0 && prepand==="AM"){
    if(minutes===0 && seconds===0){
        hour=12;prepand="Midnight";
    }else{
        hour=12;prepand="AM";
    }
}


console.log("Today is " + Daylist[day] +".")
console.log("Time is : " + hour + prepand + " : " + minutes + " : " + seconds );
