// links to html

const url = 'https://api.icndb.com/jokes/random';
const button = document.getElementById('get-joke');
const paragraph = document.querySelector('#joke');

// event listener for get random joke button
button.addEventListener('click', function () {
  getJoke();
});

// get random joke function
function getJoke() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function () {
    // JSON parsed to JS object
    let response = JSON.parse(xhr.response);
    // getting to the joke in response
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

// when page loads one random joke already on place
getJoke();