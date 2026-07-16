let currentQuoteIndex = -1;
let currentQuote = null;
let discoveredQuotes = 
    JSON.parse(localStorage.getItem("discoveredQuotes")) || [];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const toast = document.getElementById("toast");
const rarityText = document.getElementById("rarity");

function rollRarity() {
    const roll = Math.random() * 100;
    
    if (roll < 60) return "Common";
    if (roll < 85) return "Uncommon";
    if (roll < 95) return "Rare";
    if (roll < 99) return "Epic";
    if (roll < 99.9) return "Legendary";

    return "Mythic";
}

function generateQuote() {
    
    let rarity;
    let availableQuotes = [];

    do {
        rarity = rollRarity();

        availableQuotes = quotes.filter(
            quote => quote.rarity === rarity
        );

        console.log("Found:", availableQuotes.length);

    } while (availableQuotes.length === 0);
    
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * availableQuotes.length);
    } while (
        availableQuotes[randomIndex].text === currentQuote?.text &&
        availableQuotes.length > 1
    );

    currentQuote = availableQuotes[randomIndex];

    quoteText.textContent = currentQuote.text;
    authorText.textContent = "— " + currentQuote.author;

    rarityText.textContent = currentQuote.rarity;

    updateFavoriteButton();
    discoverQuote();
}

function copyQuote() {
    
    if (!currentQuote) {
        alert("Generate a quote first!");
        return;
    }

    const textToCopy = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(textToCopy);

    showToast("📋 Quote copied!")
}

function discoverQuote() {

    if (discoveredQuotes.includes(currentQuote.text)) {
        return;
    }

    discoveredQuotes.push(currentQuote.text);

    localStorage.setItem(
        "discoveredQuotes",
        JSON.stringify(discoveredQuotes)
    );

    showToast (`✨ New ${currentQuote.rarity} quote discovered!`)
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

function getDiscoveryProgress() {
    return `${discoveredQuotes.length}/${quotes.length}`;
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

