let box = document.querySelector(".costom_box");
function getRandomColor() {
    // Generate a random number between 0 and 255 for each color component
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Convert each component to a hexadecimal string and pad with leading zeros if necessary
    let rHex = r.toString(16).padStart(2, '0');
    let gHex = g.toString(16).padStart(2, '0');
    let bHex = b.toString(16).padStart(2, '0');

    // Combine the hexadecimal strings into a full color code
    return `#${rHex}${gHex}${bHex}`;
}

let randomColor = getRandomColor();

box.onclick = () =>{

    box.style.background = randomColor;

}