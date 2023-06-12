const input = document.querySelector("#input");
const counter = document.querySelector(".contador");
const toggle = document.querySelector("#alterar");

let mode = "characters"

toggle.addEventListener("click", () =>{

    if(mode === "characters") {
        mode ="words";
        toggle.textContent = "Contar caracteres";
    } else{
        mode = "characters";
        toggle.textContent = "Contar palavras";
    }

    input.dispatchEvent(new Event("input"));
})

input.addEventListener("input", () => {
    
    let count = 0;

    if(mode === "characters") {

        count = input.value.length;

        counter.textContent = `${count} caractere(s)`;

    }else {
        const words = input.value.trim().split(/\s+/);
        count = input.value.trim() === "" ? 0: words.length;
        counter.textContent = `${count} palavra(s)`;
    }
});