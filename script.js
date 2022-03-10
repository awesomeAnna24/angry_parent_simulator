document.querySelector("#yell").addEventListener("click", yell);

// function yell() {
//     let firstName = document.querySelector("#firstName").value;
//     let firstMiddleName = document.querySelector("#firstMiddleName").value;
//     let lastMiddleName = document.querySelector("#lastMiddleName").value;
//     let lastName = document.querySelector("#lastName").value;
//     let fullName = `${firstName} ${firstMiddleName} ${lastMiddleName} ${lastName}`;
//     document.querySelector("#display").innerHTML = fullName;
// }
const synth = window.speechSynthesis;
document.querySelector("#yell").addEventListener("click", yell);

function yell() {
    let firstName = document.querySelector("#firstName").value;
    let firstMiddleName = document.querySelector("#firstMiddleName").value;
    let lastMiddleName = document.querySelector("#lastMiddleName").value;
    let lastName = document.querySelector("#lastName").value;
    let fullName = `${firstName} ${firstMiddleName} ${lastMiddleName} ${lastName}`;
    document.querySelector("#display").innerHTML = fullName;
    let yellThis = new SpeechSynthesisUtterance(fullName);
    synth.speak(yellThis);
}