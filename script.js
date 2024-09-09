const deposit = document.getElementById('deposit');
const depoInput = document.getElementById('depoInput');
const depoButton = document.getElementById('depoButton');

const totalAmount = document.getElementById('totalAmount')

const withdraw = document.getElementById('withdraw');
const withInput = document.getElementById('withInput');
const withButton = document.getElementById('withButton');

const history = document.getElementById('history').getElementsByTagName('tbody')[0];

const date = document.getElementById('date');

function time(){
    let timeInterval = new Date().toLocaleString();
    date.innerHTML = timeInterval;
}
setInterval(time, 1000)

let currentBalance = 0;
depoButton.addEventListener('click', () => {
    let depoValue = Number(depoInput.value);
    if(!isNaN(depoValue) && depoValue < 999999999999999999999 && depoValue > 0){
        let currentValue = Number(depoInput.value);
        currentValue = currentValue + depoValue;
        currentBalance = currentBalance + depoValue;
        deposit.innerText = currentBalance;
        totalAmount.innerText = currentBalance;

        let date = new Date();
        let format = date.toLocaleString();
        let newRow = history.insertRow();
        newRow.insertCell(0).innerText = format;
        newRow.insertCell(1).innerText = 'deposit';
        newRow.insertCell(2).innerText = depoValue;
        newRow.insertCell(3).innerText = currentBalance;
    }else{
        alert('please insert a valid amount');
    }
    depoInput.value = "";
});


// withdraw
withButton.addEventListener('click', () => {
    let withValue = Number(withInput.value);
    if(!isNaN(withValue) && withValue > 0){

        if(currentBalance >= withValue){
            let currentWith = Number(withInput.value);
            currentBalance = currentBalance - currentWith;
            withdraw.innerText = currentWith;
            totalAmount.innerText = currentBalance;

            let date = new Date();
            let format = date.toLocaleString();
            let newRow = history.insertRow();
            newRow.insertCell(0).innerText = format;
            newRow.insertCell(1).innerText = 'withdraw';
            newRow.insertCell(2).innerText = withValue;
            newRow.insertCell(3).innerText = currentBalance;
        }else{
            alert('Insufficient balance')
        }
    }else{
        alert('please insert a valid amount')
    }
    withInput.value = "";
});