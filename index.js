const quotes = [
  {
    quote:
      'Двумя самыми важными днями в твоей жизни являются день, когда ты появился на свет, и день, когда понял, зачем.',
    author: 'Марк Твен',
  },
  {
    quote: 'Я мыслю, следовательно, существую.',
    author: 'Рене Декарт',
  },
  {
    quote: 'Победа — это еще не все, все — это постоянное желание побеждать.',
    author: 'Винс Ломбарди',
  },
  {
    quote:
      'Если вы хотите жить счастливой жизнью, привязывайте её к целям, а не к людям или вещам.',
    author: 'Альберт Эйнштейн',
  },
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
