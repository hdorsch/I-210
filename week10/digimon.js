async function getDigimon() {
    const digimonResponse = await fetch ("https://digimon-api.vercel.app/api/digimon");
    console.log(digimonResponse);
    const digimonData = await
    digimonResponse.json();
    console.log(digimonData);

    const digimonTableRef = document.querySelector(".digimonTable")
    digimonTableRef.innerHTML = ""
    for (let i = 0; i < digimonData.length; i++) {
        const digimon = digimonData[i];
        digimonTableRef.innerHTML += `
            <tr>
                <td>${digimon.name}</td>
                <td>
                    <img src="${digimon.img}" height="50"/>
                </td>
                <td>${digimon.level}</td>
            </tr>
            `;
        
    }
}