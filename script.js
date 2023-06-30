
const image = ["Saab", "Volvo", "BMW"];

var rand= Math.floor(Math.random()*image.length);

document.body.style.backgroundImage = `url(${iamge[rand]})`;
