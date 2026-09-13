function calcularJuros() {
    const inputCapital = document.getElementById('capital').value;
    const inputTaxa = document.getElementById('taxa').value;
    const inputTempo = document.getElementById('tempo').value;

    const capital = parseFloat(inputCapital);
    const taxa = parseFloat(inputTaxa);
    const tempo = parseFloat(inputTempo);

    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital < 0 || taxa < 0 || tempo < 0) {
        resultadoElemento.style.color = 'red';
        resultadoElemento.textContent = "Por favor, preencha todos os campos com valores válidos e positivos.";
        return;
    }

    const i = taxa / 100;

    const montante = capital * Math.pow((1 + i), tempo);

    resultadoElemento.style.color = '#28a745';
    resultadoElemento.textContent = `Montante final: R$ ${montante.toFixed(2)}`;
}