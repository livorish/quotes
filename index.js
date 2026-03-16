import quotes from './quotes.js';
import allQuotes from './quotes.js';

console.log(allQuotes);

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoriteConatainer = document.getElementById('favorites-container');

let currentQuoteindex = null;

function generateRandomQuote() {
  currentQuoteindex = Math.floor(Math.random() * allQuotes.length);
  const randomQuote = allQuotes[currentQuoteindex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';
  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteindex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
    <p>${currentQuote.quote}</p>
    <p class="author">${currentQuote.author}</p>
    `;
    favoriteConatainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();
