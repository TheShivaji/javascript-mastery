'use strict';

const usersContainer = document.querySelector('.users-container');

/* 
=========================================
PRACTICE TASK: Callback Hell & APIs
=========================================

Your Goal: 
Create a function `getUserAndPosts(userId)` that fetches a user's data, 
and then fetches the posts written by that user (Callback Hell style!).

API Endpoints to use:
1. Get User: `https://jsonplaceholder.typicode.com/users/${userId}`
2. Get Posts: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

Steps:
1. Create an XMLHttpRequest to fetch the User data.
2. Inside the 'load' event listener for the user:
   - Parse the JSON data.
   - Extract the user's name, email, and company name.
   - Now, make a SECOND XMLHttpRequest inside here to fetch the Posts.
3. Inside the 'load' event listener for the posts:
   - Parse the JSON data (it will be an array of post objects).
   - Get the titles of the first 2 or 3 posts.
   - Construct the HTML string (check index.html for the structure template).
   - Insert the HTML into `usersContainer`.
   - Don't forget to set `usersContainer.style.opacity = 1;` so it shows up!

Good luck! You can test it by calling:
getUserAndPosts(1);
getUserAndPosts(2);
*/

const renderUserCard = function (user, posts) {
  // Bonus: You can separate your HTML generation into a helper function like this!
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
  usersContainer.insertAdjacentHTML('beforeend', html)
  usersContainer.style.opacity = 1;

};

const getUserAndPosts = function (userId) {
  const request = new XMLHttpRequest()
  request.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`)
  request.send();

  request.addEventListener('load', function () {
    const user = JSON.parse(this.responseText)
    console.log("User Data:", user)
    
    

    const request2 = new XMLHttpRequest()
    request2.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    request2.send();

    request2.addEventListener('load', function () {
      const posts = JSON.parse(this.responseText)
      
      
      const top3Posts = posts.slice(0, 3);
      console.log("Posts Data:", top3Posts)

      
      renderUserCard(user, top3Posts)
    })

  })

};


getUserAndPosts(1);
