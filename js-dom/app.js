function calculate()
{
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = (amount.value / persons.value).toFixed(2);

    let dividedBill = document.getElementById('result');
    dividedBill.innerText = result;
}