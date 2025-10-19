
let madLibButton;
let userNoun1;
let userNoun2;
let userAdjective1;
let userAdjective2;
let userVerb1;

let noun1;
let noun2;
let adjective1;
let adjective2;
let verb1;
let madLibParagraph;
let madLibParagraphCharacter;
let madLibParagraphCharacterIndex;
let madLibParagraphTextContent;
let typingIntervalId;

document.addEventListener("DOMContentLoaded", initializeJavaScript);
function initializeJavaScript() {
    madLibButton = document.getElementById("madLibButton");
    userNoun1 = document.getElementById("userNoun1");
    userNoun2 = document.getElementById("userNoun2");
    userAdjective1 = document.getElementById("userAdjective1");
    userAdjective2 = document.getElementById("userAdjective2");
    userVerb1 = document.getElementById("userVerb1");
    noun1 = document.getElementById("noun1");
    noun2 = document.getElementById("noun2");
    adjective1 = document.getElementById("adjective1");
    adjective2 = document.getElementById("adjective2");
    verb1 = document.getElementById("verb1");
    madLibButton.addEventListener("click", madLibButtonPress);
    madLibParagraph = document.getElementById("madLibParagraph");
}

function madLibButtonPress() {
    madLibParagraphCharacterIndex = 0;
    noun1.textContent = userNoun1.value;
    noun2.textContent = userNoun2.value;
    adjective1.textContent = userAdjective1.value;
    adjective2.textContent = userAdjective2.value;
    verb1.textContent = userVerb1.value;
    madLibParagraphTextContent = madLibParagraph.textContent;
    madLibParagraph.innerHTML = "";
    setInterval(typeMadLibParagraph, 50);
}

function typeMadLibParagraph() {
    madLibParagraph.classList.remove("hidden");
    if (
        madLibParagraphCharacterIndex >= madLibParagraphTextContent.length
    ) {
        clearInterval(typingIntervalId); // stop ticking
        typingIntervalId = null;
        return;
    }
    console.log(madLibParagraphCharacterIndex);
    const madLibNextCharacter = madLibParagraphTextContent.charAt(
        madLibParagraphCharacterIndex
    );
    madLibParagraph.textContent += madLibNextCharacter;
    madLibParagraphCharacterIndex++;
};
