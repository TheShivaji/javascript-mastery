'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
// Our First AJAX Call: XMLHttpRequest

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);


//   });
// };

// getCountry('portugal');
// getCountry('usa');


// Welcome to Callback Hell


// const getCountryAndNeighbour = function (country) {

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);


//     renderCountry(data);


//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;


//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');


///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json()
    })
    .then(data => {
      renderCountry(data[0])


      const neighbour = data[0].borders?.[0]

      return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
    }).then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json()
    })
    .then(data => renderCountry(data, 'neighbour')).catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong  ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });

}
btn.addEventListener('click', () => {
  getCountryData('usa')
})





