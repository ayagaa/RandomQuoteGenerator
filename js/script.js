// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Call the printQuote script as soon as the page loads
//when the last script script.js is loaded
printQuote();