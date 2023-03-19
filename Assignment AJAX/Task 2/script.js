const apiUrl = 'https://restcountries.com/v2/name/';

function addCountry() {
  const countryInput = document.getElementById('country-input');
  const countryName = countryInput.value.trim();

  if (countryName === '') {
    alert('Please enter a country name.');
    return;
  }
  fetch(apiUrl + countryName)
    .then(response => {
      if (!response.ok) {
        throw new Error('Country not found.');
      }
      return response.json();
    })
    .then(data => {
      const country = data[0];
      const population = country.population;
      const countryListItem = document.createElement('li');
      countryListItem.textContent = `${country.name}: ${population}`;
      document.getElementById('country-list').appendChild(countryListItem);
    })
    .catch(error => {
      alert(error.message);
    });

  countryInput.value = '';
}

document.getElementById('add-btn').addEventListener('click', addCountry);
