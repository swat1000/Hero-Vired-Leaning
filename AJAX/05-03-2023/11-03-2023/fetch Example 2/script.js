const API_URL = "https://dummyjson.com/products"

async function getAPI(url){
   const response = await fetch(url);
   var data = await response.json();
   console.log(data)

   show(data);
}

getAPI(API_URL);

function show(data){
    let tab = 
    `
    <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Brand</th>
    <th>Price</th>
    </tr>
    `;

    for(let r of data.products){
        tab += `<tr>
        <td>${r.id}</td>
        <td>${r.description}</td>
        <td>${r.brand}</td>
        <td>${r.price}</td>
        </tr>
        `
    }
    document.getElementById("phone").innerHTML = tab
}