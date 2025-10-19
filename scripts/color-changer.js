const colorOptions = ["red", "blue", "green", "black", "purple", "pink"];
let currentColorIndex = 0;

document.addEventListener("DOMContentLoaded", initializeJavaScript);
function initializeJavaScript() {
    const buttonThatChangesTextColor = document.getElementById(
        "buttonThatChangesTextColor"
    );
    const textThatChangesColor = document.getElementById(
        "textThatChangesColor"
    );
    buttonThatChangesTextColor.addEventListener(
        "click",
        clickedButtonThatChangesTextColor
    );
};
function clickedButtonThatChangesTextColor() {
    textThatChangesColor.classList.remove(colorOptions[currentColorIndex]); //remove currentColor
    currentColorIndex = (currentColorIndex + 1) % colorOptions.length;
    textThatChangesColor.classList.add(colorOptions[currentColorIndex]); //set the next color to currentColor;
}
