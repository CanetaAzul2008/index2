
/* script2.js */
function salvarEstudo(tipo) {
    const input = document.getElementById(`input${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`).value;
    if (input.trim() !== "") {
        localStorage.setItem(tipo, input);
        exibirEstudo(tipo);
    }
}

function exibirEstudo(tipo) {
    const display = document.getElementById(`display${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
    display.innerHTML = localStorage.getItem(tipo) || "Nenhum registro ainda.";
}

document.addEventListener("DOMContentLoaded", () => {
    ["aberturas", "estrategia", "finais", "taticas"].forEach(exibirEstudo);
});


