const quotes = [
  "Believe in yourself — you are capable of more than you know.",
  "Every great journey begins with one small step.",
  "Don’t stop when you’re tired. Stop when you’re proud.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "The best way to predict the future is to create it.",
  "Discipline beats motivation — every single time.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Work hard in silence, let your success make the noise.",
  "Small progress is still progress — keep going.",
  "Dream it. Believe it. Build it."
];

const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuote');

newQuoteBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
