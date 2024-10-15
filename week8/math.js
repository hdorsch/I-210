function getCircleArea(radius) {
    if (radius) {
        console.log(radius * radius * Math.PI);
    }
}

// Circle radius 2
getCircleArea(2);
// Circle radius 3
getCircleArea(3);
// Circle radius 4
getCircleArea(4);
// no radius provided
getCircleArea();

function convertInchtoFeet() {
    const inches = document.getElementById("inches").value;
    const calcFeet = inches / 12
    const feetText = `Feet: ${calcFeet.toFixed(3)}`;
    document.getElementById("Feet").innerHTML = feetText;
}