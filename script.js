function calcularProbabilidade() {
    var estadoAtual = parseInt(document.getElementById("estadoAtual").value);
    var proximoEstado = parseInt(document.getElementById("proximoEstado").value);

    // Verificar se os valores são válidos
    if (isNaN(estadoAtual) || isNaN(proximoEstado)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    // Definir a matriz de transição
    var matrizTransicao = [
        [0.1, 0.7, 0.2],
        [0.3, 0.4, 0.3],
        [0.5, 0.1, 0.4]
    ];

    // Verificar se os valores estão dentro do intervalo permitido
    if (estadoAtual < 0 || estadoAtual >= matrizTransicao.length || proximoEstado < 0 || proximoEstado >= matrizTransicao[0].length) {
        alert("Os valores devem estar dentro do intervalo permitido.");
        return;
    }

    // Calcular a probabilidade de transição
    var probabilidade = matrizTransicao[estadoAtual][proximoEstado];

    // Exibir o resultado
    document.getElementById("resultado").innerText = "A probabilidade de transição de " + estadoAtual + " para " + proximoEstado + " é: " + probabilidade;
}