'use strict';

const usersContainer = document.querySelector('.users-container');

const renderError = function (msg) {
  usersContainer.insertAdjacentText('beforeend', msg);
  usersContainer.style.opacity = 1;
};

// ==========================================
// DAY 1: XMLHttpRequest & Callback Hell (Posts)
// ==========================================

const renderUserCard = function (user, posts) {
  const html = `
  <article class="user-card">
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.email}</p>
      <p>🏢 ${user.company.name}</p>
    </div>
    <div class="user-posts">
      <h3>Recent Posts:</h3>
      <ul>
        ${posts.map(post => `<li>${post.title}</li>`).join('')}
      </ul>
    </div>
  </article>`;
  
  usersContainer.insertAdjacentHTML('beforeend', html);
  usersContainer.style.opacity = 1;
};

const getUserAndPosts = function (userId) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`);
  request.send();

  request.addEventListener('load', function () {
    const user = JSON.parse(this.responseText);

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    request2.send();

    request2.addEventListener('load', function () {
      const posts = JSON.parse(this.responseText);
      const top3Posts = posts.slice(0, 3);
      
      renderUserCard(user, top3Posts);
    });
  });
};

getUserAndPosts(1);


// ==========================================
// DAY 2: Promises & Fetch API (Albums)
// ==========================================

const renderUserAlbumsCard = function (user, albums) {
  const html = `
  <article class="user-card">
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.email}</p>
      <p>🏢 ${user.company.name}</p>
    </div>
    <div class="user-posts">
      <h3>Recent Albums:</h3>
      <ul>
        ${albums.map(album => `<li>${album.title}</li>`).join('')}
      </ul>
    </div>
  </article>`;

  usersContainer.insertAdjacentHTML('beforeend', html);
  usersContainer.style.opacity = 1;
};

const getUserAndAlbums = function (userId) {
  let userData;

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`User not found (${response.status})`);
      }
      return response.json();
    })
    .then(user => {
      userData = user;
      return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Albums not found (${response.status})`);
      }
      return response.json();
    })
    .then(albums => {
      const top3Albums = albums.slice(0, 3);
      renderUserAlbumsCard(userData, top3Albums);
    })
    .catch(err => {
      renderError(`Something went wrong 💥: ${err.message}`);
    })
    .finally(() => {
      usersContainer.style.opacity = 1;
    });
};

getUserAndAlbums(2);
