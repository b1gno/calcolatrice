

document.getElementById("calcola").addEventListener("click", () =>{
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let operazioni = document.getElementById("operazioni").value;
    let risultatoDiv = document.getElementById("risultato");

    let risultato_finale = 0;

    if (isNaN(numero1) || isNaN(numero2)) {
        risultatoDiv.innerHTML = "Inserisci un numero valido.";
        return;
    }

    switch (operazioni) {
        case "somma":
            risultato_finale = numero1 + numero2;
            break;
        case "differenza":
            risultato_finale = numero1 - numero2;
            break;
        case "moltiplicazione":
            risultato_finale = numero1 * numero2;
            break;
        case "divisione":
            risultato_finale = numero1 / numero2;
            break;
    }

    risultatoDiv.innerHTML = `${risultato_finale}`;
});