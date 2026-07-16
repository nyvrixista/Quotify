const favoritesList = document.getElementById("favoritesList");

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length === 0) {
    favoritesList.innerHTML = `
        <p>No saved quotes yet.</p>
    `;
} else {
    favorites.forEach(quote => {
        const quoteCard = document.createElement("div");
        quoteCard.classList.add("quote-card");

        quoteCard.innerHTML = `
            <blockquote>
                "${quote.text}"
            </blockquote>

            <p>
                — ${quote.author}
            </p>

            <button class = "remove-btn">
                Remove
            </button>
        `;

        const removeBtn = quoteCard.querySelector(".remove-btn");

        favoritesList.appendChild(quoteCard);

        removeBtn.addEventListener("click", () => {
            const updatedFavorites = favorites.filter(favorite =>
                !(favorite.text === quote.text &&    
                  favorite.author === quote.author)
            );

            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

            location.reload();
        });
    });
}