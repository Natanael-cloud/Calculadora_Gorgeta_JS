
function update(){
    let bill = Num(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value    
    let split = document.getElementById('splitInput').value

    let tipValue = bill *(tipPercent / 100)
    console.log(tipPercent)
    let billTotal = bill + tipValue
    let billEach = billTotal / split


    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = 'R$' + tipValue
    document.getElementById('totalWithTip').innerHTML = 'R$' + billTotal
    document.getElementById('billEach').innerHTML = billTotal / split
}   