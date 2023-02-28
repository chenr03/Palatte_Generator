const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // This generates a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, "0")}`
        console.log('RandomHex', randomHex)

        // This creates a new 'li' element and inserts it into the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="react-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;

        // This click event is being added to current li element to copy the color
        color.addEventListener('click', () => copyColor(color, randomHex));
        container.appendChild(color);
    }

}
generatePalette();

const copyColor = (elem, hexValue) => {
    const colorElement = elem.querySelector(".hex-value");

    // This copies the hex value, updates the text to be copied,
    // and then changes text back to original hex value after 1 second.
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexValue, 1000);
    }).catch(()=> alert("Failed to copy the color code!")); // Just in case so you know where the problem is.
}

refreshBtn.addEventListener("click", generatePalette)