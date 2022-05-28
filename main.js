// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Grab the empty heart element
const hearts = document.querySelectorAll(".like");

//Iterate through each heart icon
hearts.forEach(likeHeart)

//For each heart, listen for a click event. If clicked, fill the heart. 
function likeHeart(heart) {
  heart.addEventListener("click", e => {
    mimicServerCall()
    .then(data => {
      const glyph = heart.querySelector("span");
      if (glyph.textContent === EMPTY_HEART) {
        glyph.textContent = FULL_HEART;
        glyph.classList.add("activated-heart");
      }
      else {
        glyph.textContent = EMPTY_HEART;
        glyph.classList.remove("activated-heart");
      }
    })
    .catch(error => {
      //Display error modal and server error message
      const errorMessage = document.querySelector("div#modal");
      errorMessage.classList.remove("hidden");
      document.querySelector("#modal-message").textContent = error;
      setTimeout(() => errorMessage.classList.add("hidden"), 3000);
    })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
