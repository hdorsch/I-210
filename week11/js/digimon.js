async function getDigimon() {
    const digimonResponse = await fetch ("https://digimon-api.vercel.app/api/digimon");
    console.log(digimonResponse);
    const digiData = await
    digimonResponse.json();
    console.log(digiData);
    return digiData;
}