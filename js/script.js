function domWithID(id) {
    return document.getElementById(id);
}

domWithID('calculate').addEventListener('click', function () {
    if (domWithID('food-value').value < 0 ||domWithID('rant-value').value < 0 || domWithID('transport-value').value < 0 || domWithID('salary-value').value < 0) {
        alert('Invalid Input!!! Please Enter a valid Input');
        return ;
    }
    const totalExpenses = parseFloat(domWithID('food-value').value) + parseFloat(domWithID('rant-value').value) + parseFloat(domWithID('transport-value').value);
    if (totalExpenses > parseFloat(domWithID('salary-value').value)) {
        alert('You should less your expenses');
        return ;
    } else {
        domWithID('totalIncome').innerText = domWithID('salary-value').value;
        domWithID('totalExpenses').innerText = totalExpenses;
        domWithID('afterExpensesBalance').innerText = parseFloat(domWithID('salary-value').value) - totalExpenses;
    }
    domWithID('food-value').value = 0;
    domWithID('rant-value').value = 0;
    domWithID('transport-value').value = 0;
    domWithID('salary-value').value = 0;
    domWithID('saving-button').disabled = false;
    domWithID('saving-value').disabled = false;
})

domWithID('saving-button').addEventListener('click', function () {
    if (parseFloat(domWithID('saving-value').value) < 0) {
        alert('Invalid Input!!! Please Enter a valid Input');
        return ;
    }
    let savings = (domWithID('totalIncome').innerText / 100) * domWithID('saving-value').value;
    if (savings > parseFloat(domWithID('afterExpensesBalance').innerText)) {
        savings = parseFloat(domWithID('afterExpensesBalance').innerText)
    }
    domWithID('saving').innerText = savings;
    domWithID('afterSavingBalance').innerText = domWithID('afterExpensesBalance').innerText - savings;
})
