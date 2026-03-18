// import allQuotes from './date/quotes.js';
import { handleQuote } from './src/handlers/quote.js';

const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
generateBtn.addEventListener('click', handleQuote);
