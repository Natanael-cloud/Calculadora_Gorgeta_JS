function formatMoney(value) {
    // A função formatMoney formata um valor numérico em uma string com símbolo de dólar e duas casas decimais.

    value = Math.ceil(value * 100) / 100
    // Arredonda o valor para cima até a segunda casa decimal.

    value = value.toFixed(2)
    // Garante que o valor tenha exatamente duas casas decimais.

    return '$ ' + value
    // Retorna o valor formatado como string, precedido pelo símbolo de dólar.
}

function formatSplit(value) {
    // A função formatSplit ajusta a exibição do número de pessoas para 'person' no singular ou 'people' no plural.

    if (value == 1) return value + ' person'
    // Se o valor for 1, retorna '1 person' (singular).

    return value + ' people'
    // Caso contrário, retorna o valor seguido de 'people' (plural).
}

function update() {
    // A função update é chamada toda vez que há interação com os inputs, atualizando os cálculos de gorjeta, total e divisão.

    let bill = Number(document.getElementById('yourBill').value)
    // Obtém o valor da conta inserido pelo usuário, convertendo para número.

    let tipPercent = document.getElementById('tipInput').value
    // Obtém o valor da porcentagem da gorjeta selecionada pelo usuário.

    let split = document.getElementById('splitInput').value
    // Obtém o número de pessoas para dividir a conta.

    let tipValue = bill * (tipPercent / 100)
    // Calcula o valor da gorjeta, multiplicando o valor da conta pela porcentagem da gorjeta.

    let billTotal = bill + tipValue
    // Calcula o valor total da conta, somando o valor da gorjeta ao valor da conta.

    let billEach = billTotal / split
    // Calcula quanto cada pessoa deve pagar, dividindo o total da conta pelo número de pessoas.

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    // Atualiza o elemento HTML para mostrar a porcentagem de gorjeta selecionada.

    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    // Atualiza o elemento HTML para mostrar o valor da gorjeta, formatado em dólares.

    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    // Atualiza o elemento HTML para mostrar o valor total da conta, incluindo a gorjeta.

    document.getElementById('splitValue').innerHTML = formatSplit(split)
    // Atualiza o elemento HTML para mostrar o número de pessoas, formatado corretamente no singular ou plural.

    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
    // Atualiza o elemento HTML para mostrar quanto cada pessoa deve pagar, formatado em dólares.
}
