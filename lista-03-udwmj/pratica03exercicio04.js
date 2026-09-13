function calcularArea() {
    const inputRaio = document.getElementById('raio').value;

    const raio = parseFloat(inputRaio);

    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(raio) || raio < 0) {
        resultadoElemento.style.color = 'red';
        resultadoElemento.textContent = "Por favor, insira um valor válido e positivo para o raio.";
        return; 
    }


    const area = Math.PI * (raio * raio);

    resultadoElemento.style.color = '#28a745'; 
    resultadoElemento.textContent = `A área do círculo é: ${area.toFixed(2)}`;
}