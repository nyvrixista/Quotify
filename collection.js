const collectionList = document.getElementById("collectionList");
const collectionProgress = document.getElementById("collectionProgress");


function loadCollection() {

    const discoveredQuotes = JSON.parse(
        localStorage.getItem("discoveredQuotes")
    ) || [];


    collectionList.innerHTML = "";


    const collected = quotes.filter(quote =>
        discoveredQuotes.includes(quote.text)
    );

    if (collected.length === 0) {
        collectionList.innerHTML = `
            <p class = "empty-collection">
                Your collection is empty.<br>
                Discover your first quote to begin.
            </p>
        `;
    }

    if (collected.length > 0) {
        
        collected.forEach(quote => {

        const card = document.createElement("div");
        
        card.classList.add(
            "collection-card",
            quote.rarity.toLowerCase()
        );

        card.innerHTML = `
            <p class="collection-rarity">${quote.rarity}</p>

            <blockquote>
                "${quote.text}"
            </blockquote>

            <p class="collection-author">
                — ${quote.author}
            </p>
        `;

        collectionList.appendChild(card);

    });

}
    


    collectionProgress.textContent =
        `${collected.length} / ${quotes.length} quotes discovered`;
}


loadCollection();

