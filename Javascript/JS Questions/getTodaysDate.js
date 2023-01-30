var date = new Date()
 var todaysDate = date.getDate();
 var month = date.getMonth()+1;
 var year = date.getFullYear();

 if(todaysDate<10) 
{
    todaysDate='0'+todaysDate;
} 

if(month<10) 
{
    month='0'+month;
} 
 date = todaysDate+"-"+month+"-"+year;
console.log(date)