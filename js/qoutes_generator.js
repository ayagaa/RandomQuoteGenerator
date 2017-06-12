//Variable that holds the unique ids for the quotes
var quoteUniqueIds = [];

//A positive integer value which identifies the timer created by the call to setTimeout(); 
//this value can be passed to stopAutoQuote() to cancel the timeout.
var timeOutId;

/*
Selects a random quote object from the quotes array and
returns the randomly selected quote object
*/
function getRandomQuote() {
    //Refill the array with the unique quotes ids if needed
    if (quoteUniqueIds.length === 0) {
        console.log('starting to show quotes');
        for (var i = 0; i < quotes.length; i += 1) {
            //Loop through the properties in the object to find the id property
            for (var prop in quotes[i]) {
                //Add only value from the id property
                if (prop === 'id') {
                    console.log(quotes[i][prop]);
                    quoteUniqueIds.push(quotes[i][prop]);
                }
            }
        }
    }
    //The id of the quote that will be randomly selected
    var randomQuoteId;
    //The index of the selected quote id in the quoteUniqueIds array
    var indexOfQuoteId;

    if (quoteUniqueIds.length > 1) {
        //Loop until the generated random number matches any of the
        //ids still in the quotedUniqueIds array
        do {
            randomQuoteId = Math.floor(Math.random() * quotes.length) + 1;
        } while (quoteUniqueIds.indexOf(randomQuoteId) === -1)
    } else {
        //If only one element is left in the quoteUniqueIds just assign randomQuoteId
        //the value of the last element in that array
        randomQuoteId = quoteUniqueIds[0];
    }
    //Variable to hold the resulting random quote
    var randomQuote = {};
    //Loop to find the quote which has a matching id equal to the
    //randomQuoteId generated
    for (var i = 0; i < quotes.length; i += 1) {
        if (quotes[i].id === randomQuoteId) {
            randomQuote = quotes[i];
            break;
        }
    }
    console.log('Showing quote with id ' + randomQuoteId);
    //Get the index of the randomQuoteId
    indexOfQuoteId = quoteUniqueIds.indexOf(randomQuoteId);
    //Remove the value of the randomQuoteId from the quoteUniqueIds
    //so that it wont be repeated again until the array is refilled
    //and all the other quotes have been shown
    quoteUniqueIds.splice(indexOfQuoteId, 1);
    return randomQuote;
}

/*
Function to generate a random rgb number
*/
function randomRGB() {
    return Math.floor(Math.random() * 256);
}
/*
Function that returns a random color that will set the 
background color of the page each time a quote is set
*/
function getRandomColor() {
    var color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

/*
Form a html string that will be printed to the page
with the following format.
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
<footer class="quote-footer">[tag here]</footer>
*/
function formatQuote(quote) {
    var html = '<p class = "quote">' + quote['quote'] + '</p>';
    html += '<p class = "source">' + quote['source'];
    //If the citation property is empty dont add it
    if (quote['citation'].length > 0) {
        html += '<span class="citation">' + quote['citation'] + '</span>';
    }
    //If the year property is empty dont add it
    if (quote['year'] > 0) {
        html += '<span class="year">' + quote['year'] + '</span></p>';
    }
    html += '</p>';
    //Add the footer for the quote to display the tag property by joining all the
    //elements in the tag array
    html += '<footer class="quote-footer">tags: ' + quote['tag'].join(', ') + '</footer>'
    return html;
}

/*
Sets an interval which changes the random quote automatically
*/
function startAutoQuote() {
    //Call the printQuote after 30 seconds
    timeOutId = setTimeout(printQuote, 30000);
}

/*
Stops the automatic change of the random quotes
*/
function stopAutoQuote() {
    clearTimeout(timeOutId);
}

//Function to print the resulting random quote to the web page
function printQuote() {
    var randomQuote = '';
    var html = '';
    //Ensure that the html always has something to print on the page
    while (html.length === 0) {
        randomQuote = getRandomQuote();
        html = formatQuote(randomQuote);
    }
    //Change the background color of the page with a random color
    document.body.style.backgroundColor = getRandomColor();
    //Select the tag where the quote will be printed
    var content = document.getElementById("quote-box");
    //Set the content 
    content.innerHTML = html;
}