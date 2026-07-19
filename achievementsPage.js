const achievementList = document.getElementById("achievementList");
const achievementProgress = document.getElementById("achievementProgress");

function loadAchievements() {
    const unlockedAchievements = JSON.parse(
        localStorage.getItem("unlockedAchievements")
    ) || [];

    achievementList.innerHTML = "";

    let unlockedCount = 0;

    achievements.forEach(achievement => {
        const unlocked = unlockedAchievements.includes(
            achievement.id
        );

        if (unlocked) {
            unlockedCount++;
        }

        const card = document.createElement("div");

        card.classList.add(
            "achievement-card",
            unlocked ? "unlocked" : "locked"
        );

        card.innerHTML = `
            <h2>
                ${unlocked ? achievement.name : "🔒 Hidden Achievement"}
            </h2>

            <p>
                ${
                    unlocked 
                    ? achievement.description 
                    : "????????????"
                }
            </p>
        `;

        achievementList.appendChild(card);

    });

    achievementProgress.textContent = 
        `${unlockedCount} / ${achievements.length} secrets uncovered`;
}

loadAchievements();