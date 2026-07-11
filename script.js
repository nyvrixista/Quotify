let currentQuoteIndex = -1;
let currentQuote = null;

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const toast = document.getElementById("toast");
console.log(toast);

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex);

    currentQuoteIndex = randomIndex;

    const randomQuote = quotes[randomIndex];
    currentQuote = randomQuote;

    quoteText.textContent = randomQuote.text;
    authorText.textContent = "— " + randomQuote.author;
    updateFavoriteButton();
}

function copyQuote() {
    const textToCopy = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(textToCopy);
    showToast("📋 Quote copied!")
}

function updateFavoriteButton() {
    if (!currentQuote) {
        favoriteBtn.textContent = "🤍 Save";
        return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favorites.some(favorite =>
        favorite.text === currentQuote.text &&
        favorite.author === currentQuote.author
    );

    favoriteBtn.textContent = isFavorite ? "❤️ Saved" : "🤍 Save";
}

function toggleFavorite() {

    if (!currentQuote) {
        alert("Generate a quote first!");
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const index = favorites.findIndex(favorite =>
        favorite.text === currentQuote.text &&
        favorite.author === currentQuote.author
    );

    if (index === -1) {
        favorites.push(currentQuote);
        showToast("❤️ Quote saved!");
    } else {
        favorites.splice(index, 1);
        showToast("🗑️ Quote removed!");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    updateFavoriteButton();
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

currentQuote = quotes[0];

if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", generateQuote);
}

if (copyQuoteBtn) {
    copyQuoteBtn.addEventListener("click", copyQuote);
}

if (favoriteBtn) {
    favoriteBtn.addEventListener("click", toggleFavorite);
}