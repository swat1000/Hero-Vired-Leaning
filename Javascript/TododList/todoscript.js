function add_item(){
    var item = document.getElementById("box");
    var listItem = document.getElementById("list_item");

    if(item.value !=""){
       var make_li = document.createElement("li");
       console.log(make_li)
       make_li.appendChild(document.createTextNode(item.value));

       listItem.appendChild(make_li);
       item.value = "";

    }
    else{
        alert("Please Enter a list item");
    }

}


    
    


