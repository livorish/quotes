import allQuotes from './quotes.js';

console.log(allQuotes);

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  const randomQuote = allQuotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
