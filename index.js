import allQuotes from './src/quotes.js';
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utils.js';

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoriteConatainer = document.getElementById('favorites-container');

let currentQuoteindex = null;

function generateRandomQuote() {
  let randomIndex = generateRandomInt(allQuotes.length);
  console.log(randomIndex);
  const { quote, author, isFavorite } = allQuotes[randomIndex];
  currentQuoteindex = randomIndex;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = allQuotes[currentQuoteindex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);
  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoriteConatainer,
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();
