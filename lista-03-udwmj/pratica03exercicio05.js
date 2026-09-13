function calcularVolume() {
    const inputRaio = document.getElementById('raio').value;

    const raio = parseFloat(inputRaio);

    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(raio) || raio < 0) {
        resultadoElemento.style.color = 'red';
        resultadoElemento.textContent = "Por favor, insira um valor válido e positivo para o raio.";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    resultadoElemento.style.color = '#28a745';
    resultadoElemento.textContent = `O volume da esfera é: ${volume.toFixed(2)}`;
}