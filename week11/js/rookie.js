
const tbodyRef = document.querySelector("tbody");

async function makeTable() {
    const allDigimon = await getDigimon();
    
    for (let i = 0; i < allDigimon.length; i++) {
        const digimon = allDigimon[i];

        if (digimon.level == "Rookie") {
            tbodyRef.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${digimon.name}</td>
                <td>
                <img src="${digimon.img}" height="50"/>
                </td>
            </tr>
            `
        }
        
    }
}

makeTable();