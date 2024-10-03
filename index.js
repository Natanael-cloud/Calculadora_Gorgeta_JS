
function update(){
    let bill = Num(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value    
    let split = document.getElementById('splitInput').value

    let tipValue = bill *(tipPercent / 100)
    console.log(tipPercent)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
}