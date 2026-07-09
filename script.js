const quotes = [
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },

    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchhill"
    },

    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

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