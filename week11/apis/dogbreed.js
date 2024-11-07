async function getBluetickDogs() {
    const bluetickResponse = await fetch(`https://dog.ceo/api/breed/bluetick/images`);

    const bluetickData = await bluetickResponse.json();

    return bluetickData;
}

async function dogImages() {
    const dogsRef = document.querySelector(".dogs");
    
    const allDogs = await getBluetickDogs();

    console.log(allDogs);

    for (let i = 0; i < allDogs.message.length; i++) {
        const dogImage = allDogs.message[i];
        dogsRef.innerHTML +=    `
        <img src="${dogImage}" height="100"/>
        `
        
    }

}

getBluetickDogs();

dogImages();