const productColorsChoice = document.getElementById("colors");
for (let i = 0; i < productColorsChoice.length; i++) {
const ColorsChoice = document.createElement("option");
ColorsChoice.value = product.colors[i];
ColorsChoice.innerHTML = product.colors[i];
productColorsChoice.appendChild(ColorsChoice);