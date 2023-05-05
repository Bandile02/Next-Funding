// Get all the div elements with class "my-class"
var divs = document.querySelectorAll('.answer');

// Iterate over each div element and do something with it
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  // Do something with the div element, for example change its text
  div.textContent = "New text";
}

// Include jQuery library in your HTML file

// Add parallax effect to background image
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.parallax-bg').css('background-position-y', -(scrollTop / 2) + 'px');
});


function submitAnswers() {
  var satisfactionValue = document.querySelector('input[name="satisfaction"]:checked').value;
  var recommendationValue = document.querySelector('input[name="recommendation"]:checked').value;
  var usabilityValue = document.querySelector('input[name="usability"]:checked').value;
  console.log("Satisfaction value: " + satisfactionValue);
  console.log("Recommendation value: " + recommendationValue);
  console.log("Usability value: " + usabilityValue);
}

function submitAnswers() {
  window.open("index.html");
}

function input() {
  window.open("login.html");
}