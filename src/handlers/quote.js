import { generateRandomInt } from '../utils.js';
import { handleFavorite } from './favorites.js';
import allQuotes from '../date/quotes.js';

let currentQuote = null;

function handleQuote() {
  let randomQuote = chooseRandomQuote(allQuotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('quote-author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function chooseRandomQuote(allQuotes) {
  let randomIndex = generateRandomInt(allQuotes.length);
  return allQuotes[randomIndex];
}

export { handleQuote, currentQuote };
