let currentQuoteIndex = -1;

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex);

    currentQuoteIndex = randomIndex;

    const randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.text;
    authorText.textContent = "— " + randomQuote.author;
}

function copyQuote() {
    const textToCopy = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(textToCopy);
    alert("Quote copied to clipboard!");
}

newQuoteBtn.addEventListener("click", generateQuote);
copyQuoteBtn.addEventListener("click", copyQuote);