
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.responseText, 'text/xml');

    const restaurants = xmlDoc.getElementsByTagName('restaurant');

    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      const name = restaurant.getAttribute('name');
      const address = restaurant.getAttribute('address');
      const type = restaurant.getAttribute('type');

      const li = document.createElement('li');
      li.innerHTML = `${name}: ${address}`;
      li.classList.add(type);
      document.getElementById('restaurant-list').appendChild(li);
    }
  }
};
xhttp.open('GET', 'restaurant.xml', true);
xhttp.send();
