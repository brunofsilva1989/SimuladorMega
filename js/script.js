function generateNumbers() {
    const totalNumbers = 60; // Total de números disponíveis
    const drawCount = 6; // Quantidade de números sorteados
    const numbers = [];

    while (numbers.length < drawCount) {
        const randomNumber = Math.floor(Math.random() * totalNumbers) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    numbers.sort((a, b) => a - b);

    // Exibir os números na tela
    document.getElementById('numbers').textContent = numbers.join(', ');
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('copyButton').classList.remove('d-none');
}

function copyToClipboard() {
    const text = document.getElementById('numbers').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Números copiados para a área de transferência!');
    });
}