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
    <th>Image</th>
    <th>Description</th>
    <th>Brand</th>
    <th>Price</th>
    
    </tr>
    `;

    for(let r of data.products){
        tab += `<tr>
        <td>${r.id}</td>
        <td><img src = "${r.images[0]}"</td>
        <td>${r.description}</td>
        <td>${r.brand}</td>
        <td>${r.price}</td>
        </tr>
        `
    }
    document.getElementById("phone").innerHTML = tab
}












// const API_URL = "https://dummyjson.com/products";

//   async function getAPI(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     show(data);
//   }

//   getAPI(API_URL);

//   function show(data) {
//     const container = document.getElementById("phone");

//     for (const product of data.products) {
//       const card = document.createElement("div");
//       card.className = "card";
//       container.appendChild(card);

//       const img = document.createElement("img");
//       img.src = product.images[1];
//       card.appendChild(img);

//       const details = document.createElement("div");
//       details.className = "details";
//       card.appendChild(details);

//       const description = document.createElement("div");
//       description.className = "description";
//       description.textContent = product.description;
//       details.appendChild(description);

//       const brand = document.createElement("div");
//       brand.className = "brand";
//       brand.textContent = product.brand;
//       details.appendChild(brand);

//       const price = document.createElement("div");
//       price.className = "price";
//       price.textContent = `$${product.price}`;
//       details.appendChild(price);
//     }
//   }