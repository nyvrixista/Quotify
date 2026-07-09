const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const categoryTitle = document.getElementById("categoryTitle");
const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

categoryTitle.textContent = formattedCategory;

const categoryQuotes = quotes.filter(
    quote => quote.category === category
);
const quotesList = document.getElementById("quotesList");

categoryQuotes.forEach(quote => {
    const quoteCard = document.createElement("div");
    quoteCard.className = "quote-card";
    quoteCard.innerHTML = `
        <blockquote>
            "${quote.text}"
        </blockquote>

        <p>
            — ${quote.author}
        </p>     
    `;

    quotesList.appendChild(quoteCard);
});