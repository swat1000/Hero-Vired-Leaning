// Convert arrays in uppercase

let str = ["avengers", "captain america", "ironman", "black panther"];
 
var arr = String(str).toUpperCase().split(",");
console.log(arr)

//Get even number from arrays
var num = [1,2,3,4,5,6,7,8,9,10]
var arr1 = num.filter(function(el){
    return el%2==0;
})
console.log(arr1)
// Get odd number as separate
var arr2 = num.map(function(element){
    if(element%2 ===0) {return element}
    else {return `${element} is Odd number`}
})
console.log(arr2)

// var arr2 = num.forEach(function(element){
//     if(element%2 ===0)
//     {
//         arr2.push(element)
//     }
// })
    // console.log(arr3)
//Reversing a string

  let str1 = ("Swatantra");
  str2 = str1.split(""),str2.reverse("");
  str1 = str2.join("");
  console.log(str1);


  // converting miles into kilometer
  

  function miles_to_kilometer(distance){
    var kilometer = miles * 1.69;
    return kilometer;
}

var miles = [216]
var kilometer_in_km = miles.map(miles_to_kilometer);
console.log("The distance travelled in km is " + kilometer_in_km)






 

