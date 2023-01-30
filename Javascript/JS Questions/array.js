//Indexing in array

var arr1=[1,2,3,4,5,6,7]
        console.log(arr1[0])
        console.log(arr1[3])
        console.log(arr1[arr1.length-1])
var arr2 = new Array(45,67,89,90)
        console.log(arr2)
        console.log(typeof(arr2))

// loops in array
        for(var i=0;i<arr1.length;i++){
            console.log(arr1[i])
        }

        console.log("*************************")

// Using for in loop
        for(var i in arr2){
            console.log(arr2[i])
        }
        console.log("**************************")

//Using for of loop   
        for (var j of arr2){
            console.log(j)
        }
        console.log("*************************")
 //Adding values

        arr1.push(100) // Adds value 100 at last position of array
        arr1.unshift(200) // Adds value 100 at first position
        console.log(arr1)
        console.log("*************************")
//pop method        
        arr1.pop()// It removes the last object and returns element poped
        console.log(arr1)

        console.log("*************************")
//shift method
        arr1.shift()// It removes the first object and returns element shifted
        console.log(arr1)

        console.log("*************************")
// splice method
        arr2 = ["monkey","elephant","tiger","lion"]
        arr2.splice(0,2)//it removes first 2 objects using index given
        console.log(arr2)

        console.log("*************************")

        arr2 = ["monkey","elephant","tiger","lion"]
        arr2.splice(3,0,1000,2000)// it addes the values leaving first 3 objects and 1 from last
        console.log(arr2)

        console.log("*************************")

// concating two arrays
        var arr5 = [2,3,4,5,6,7]
        var arr6 = [10,20,30,40,2,3,4,1]
        var arr7 = arr5.concat(arr6)//its concats the both arrays
        console.log(arr7)
        
        console.log("*************************")

 // index method                          if number not present gives default value -1
        console.log(arr6.indexOf(30)) // gives index value of number present in array
        
        console.log("*************************")
        console.log(arr6.lastIndexOf(30))
        
        console.log("*************************")
 // include method
        console.log(arr6.includes(2))//it return  the boolean value if object present

        console.log("*************************")
        
  // find the first value in array depending on condition
  var ans1 = arr6.find(function(el){
    return el > 20 ;
  } ) 
        console.log(ans1)
        console.log("*************************")
  
  
  // filter provides all value depending on condition
      var ans2 = arr6.filter(function(el){
        return el > 20;
      })
      console.log(ans2);

      console.log("*************************")
// sorting method
    console.log(arr6.sort());

    console.log("*************************")

    console.log(arr6.sort(function(a,b){
        return a-b;
    }));
    console.log("*************************")

 // reverse method
    console.log(arr6.reverse());

    console.log("*************************")
 //Math method
  console.log(Math.max(arr6));  //array cannot be used
  console.log(Math.max(10,20,30,40));
  console.log(Math.max.apply(null,arr6));// used to overcome array 
  console.log(Math.min.apply(null,arr6));
  console.log("*************************")
  //Map Method

  var square = [1,2,3,4,5,6,8]
  var results = square.map(function(element){
    return element*element
  })
  console.log(results)

  console.log("*************************")

  var f1 = function(element){
    return element*element
  }
  var results = square.map(f1)
  console.log(results)

  console.log("*************************")
  // reduce method
  var f2 = function(a,b){
    return a+b
  }
  var output = square.reduce(f2)
  console.log(output)
//   var output2 = starr.reduce(f2)
//   console.log(output2)


    




    







