/*
The quotes array containing:
    1.A quote property which contains a string: the text of the quote that will be displayed on the page.
    2.A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
    3.An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
    4.An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
    5.Tag element
 */
const quotes = [
    { id: 1, quote: "The man who passes the sentence should swing the sword.", source: 'Ned Stark', citation: 'Game of Thrones Season 1 Episode 1', year: 2010, tag: ['life', 'justice', 'responsibility'] },
    { id: 2, quote: "When you play the game of thrones, you win or you die. There is no middle ground.", source: 'Cersei Lannister', citation: 'Game of Thrones Season 1 Episode 7', year: 2010, tag: ['politics', 'power', 'ambition'] },
    { id: 3, quote: "All men must die, but we are not men.", source: 'Daenerys Targaryen', citation: 'Game of Thrones Season 3 Episode 3', year: 2013, tag: ['death', 'destiny', 'defiance'] },
    { id: 4, quote: "By what right does the wolf judge the lion?", source: 'Jaime Lannister', citation: 'Game of Thrones Season 3 Episode 5', year: 2013, tag: ['justice', 'hypocrisy'] },
    { id: 5, quote: "If you think this has a happy ending, you haven’t been paying attention.", source: 'Ramsay Bolton', citation: 'Game of Thrones Season 3 Episode 6', year: 2013, tag: ['torture', 'sarcasm', 'comedy'] },
    { id: 6, quote: "Any man who must say 'I am the king' is no true king.", source: ' Tywin Lannister', citation: 'Game of Thrones Season 3 Episode 10', year: 2013, tag: ['power', 'dignity', 'reign'] },
    { id: 7, quote: "The great war is here.", source: 'John Snow', citation: 'Game of Thrones Season 7 Episode Unknown', year: '', tag: ['war', 'priorities', 'survival'] }

];