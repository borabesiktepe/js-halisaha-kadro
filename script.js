function createTeams() {
    const players = [];
    const playerCount = parseInt(document.getElementById("playerCount").value);

    for (let i = 0; i < playerCount; i++) {
        const playerName = document.getElementById(`playerName${i + 1}`).value;
        const playerPower = parseInt(document.getElementById(`playerPower${i + 1}`).value);

        players.push({ name: playerName, power: playerPower });
    }

    // Oyuncuları güç değerine göre sırala
    players.sort((a, b) => b.power - a.power);

    const team1 = [];
    const team2 = [];
    let totalPower1 = 0;
    let totalPower2 = 0;

    players.forEach((player) => {
        // Oyuncuyu takımlara dengeli bir şekilde eklemek için
        if (totalPower1 <= totalPower2) {
            team1.push(player);
            totalPower1 += player.power;
        } else {
            team2.push(player);
            totalPower2 += player.power;
        }
    });

    // Takımları yazdır
    const team1Container = document.getElementById("team1");
    team1Container.innerHTML = "Takım 1:<br>";
    team1.forEach((player) => {
        team1Container.innerHTML += player.name + " - " + player.power + "<br><br>";
    });

    const team2Container = document.getElementById("team2");
    team2Container.innerHTML = "Takım 2:<br>";
    team2.forEach((player) => {
        team2Container.innerHTML += player.name + " - " + player.power + "<br>";
    });
}

document.getElementById("playerCount").addEventListener("change", function () {
    const playerCount = parseInt(this.value);
    const playersContainer = document.getElementById("playersContainer");
    playersContainer.innerHTML = "";

    for (let i = 0; i < playerCount; i++) {
        playersContainer.innerHTML += `
        <label for="playerName${i + 1}">Oyuncu ${i + 1} Adı:</label>
        <input type="text" id="playerName${i + 1}"><br>
        <label for="playerPower${i + 1}">Oyuncu ${i + 1} Gücü (1-10 arası):</label>
        <input type="number" id="playerPower${i + 1}" min="1" max="10"><br><br>
      `;
    }
});

document.getElementById("createTeamsBtn").addEventListener("click", createTeams);
