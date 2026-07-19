let currentQuote = null;
let discoveredQuotes = 
    JSON.parse(localStorage.getItem("discoveredQuotes")) || [];
let unlockedAchievements = 
    JSON.parse(localStorage.getItem("unlockedAchievements")) || []; 
let toastShowing = false;

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const toast = document.getElementById("toast");
const rarityText = document.getElementById("rarity");
const quoteCard = document.getElementById("quoteCard");
const toastQueue = [];

const card_animation_time = 250;

function rollRarity() {
    const roll = Math.random() * 100;
    
    if (roll < 60) return "Common";
    if (roll < 85) return "Uncommon";
    if (roll < 95) return "Rare";
    if (roll < 99) return "Epic";
    if (roll < 99.9) return "Legendary";

    return "Mythic";
}

function updateRarityStyle(rarity) {
    quoteCard.classList.remove(
        "common",
        "uncommon",
        "rare",
        "epic",
        "legendary",
        "mythic"
    );

    quoteCard.classList.add(rarity.toLowerCase());
}

function displayQuote() {
    quoteText.textContent = currentQuote.text;
    authorText.textContent = "— " + currentQuote.author;

    rarityText.textContent = currentQuote.rarity;

    updateRarityStyle(currentQuote.rarity);
    discoverQuote();
}

function revealQuote() {

    if (currentQuote.rarity === "Legendary") {

        quoteText.textContent = "🟠 LEGENDARY";
        authorText.textContent = "";

        setTimeout(() => {
            displayQuote();
        }, 700);

    } 

    else if (currentQuote.rarity === "Mythic") {

        quoteText.textContent = "🌌 MYTHIC DISCOVERED";
        authorText.textContent = "";

        setTimeout(() => {
            displayQuote();
        }, 1200);

    } 

    else {
        displayQuote();
    }

    quoteCard.classList.remove("opening");
}

function generateQuote() {

    quoteCard.classList.add("opening");

    setTimeout(() => {

        let rarity;
        let availableQuotes = [];

        do {
            rarity = rollRarity();

            availableQuotes = quotes.filter(
                quote => quote.rarity === rarity
            );

        } while (availableQuotes.length === 0);

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * availableQuotes.length);
        } while (
            availableQuotes[randomIndex].text === currentQuote?.text &&
            availableQuotes.length > 1
        );

        currentQuote = availableQuotes[randomIndex];
    
        revealQuote();

        quoteCard.classList.remove("opening");

    }, card_animation_time);
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

    const unlocked = checkAchievements();

    if (!unlocked){
        showToast (`✨ New ${currentQuote.rarity} quote discovered!`);
    }
}

function showToast(message) {
    toastQueue.push(message);

    if (!toastShowing) {
        displayNextToast();
    }

}

function displayNextToast() {
    if (toastQueue.length === 0) {
        toastShowing = false;
        return;
    }

    toastShowing = true;

    toast.innerHTML = toastQueue.shift();
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            displayNextToast();
        }, 250);
    
    }, 2000);
}

function getDiscoveryProgress() {
    return `${discoveredQuotes.length}/${quotes.length}`;
}

function checkAchievements() {
    let unlockedSomething = false;

    const discoveredCount = discoveredQuotes.length;

    achievements.forEach(achievement => {
        if (unlockedAchievements.includes(achievement.id)) {
            return;
        }

        let unlocked = false;

        switch (achievement.id) {
            case "first_quote":
                unlocked = discoveredCount >= 1;
                break;

            case "collector_10":
                unlocked = discoveredCount >= 10;
                break;
            
            case "collector_25":
                unlocked = discoveredCount >= 25;
                break;

            case "collector_50":
                unlocked = discoveredCount >= 50;
                break;

            case "completionist":
                unlocked = discoveredCount === quotes.length;
                break;

            case "first_legendary":
                unlocked = currentQuote.rarity === "Legendary";
                break;

            case "first_mythic":
                unlocked = currentQuote.rarity === "Mythic";
                break;

        }

        if (unlocked) {
            unlockedSomething = true;

            unlockedAchievements.push(achievement.id);

            localStorage.setItem(
                "unlockedAchievements",
                JSON.stringify(unlockedAchievements)
            );

            showToast(`
                <strong>🏆 Achievement Unlocked!</strong><br><br>
                ${achievement.name}<br>
                ${achievement.description}
            `);
        }
    });

    return unlockedSomething;
}

currentQuote = null;

if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", generateQuote);
}

