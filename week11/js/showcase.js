const inTrainingShowcaseRef = document.querySelector("#in-training-showcase");

const rookieShowcaseRef = document.querySelector("#rookie-showcase");

// list 
const inTrainingDigimon = [];
const rookieDigimon = [];

async function makeShowcase() {
    const allDigimon = await getDigimon();

    for (let i = 0; i < allDigimon.length; i++) {
        const digimon = allDigimon[i];
        if (digimon.level == "In Training") {
            inTrainingDigimon.push(digimon);
        }            
        if (digimon.level == "Rookie") {
            rookieDigimon.push(digimon);
        }
    }
    inTrainingShowcaseRef.innerHTML = "";
    rookieShowcaseRef.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        inTrainingShowcaseRef.innerHTML += `
        <img src="${inTrainingDigimon[i].img}"/>
        `;
    }
    for (let i = 0; i < 3; i++) {
        rookieShowcaseRef.innerHTML += `
        <img src="${rookieDigimon[i].img}"/>
        `;
    }
    
    console.log(inTrainingDigimon);
}

makeShowcase();