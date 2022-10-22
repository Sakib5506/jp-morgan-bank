//Login button handler
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})
//Deposite button handler
const depositeBtn = document.getElementById('deposite-btn');
depositeBtn.addEventListener('click', function(){
    const depositeNumber = inputUpdate('input-deposite');
    
    displayUpdate('display-deposite',depositeNumber);
    displayUpdate('display-balance',depositeNumber);

    document.getElementById('input-deposite').value = '';
})

//Withdraw button handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function() {
    const withdrawNumber = inputUpdate('input-withdraw');

    displayUpdate('display-withdraw',withdrawNumber);
    displayUpdate('display-balance',-1*withdrawNumber);

    document.getElementById('input-withdraw').value = '';
})
//input update
function inputUpdate(n){
    const input = document.getElementById(n).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}
// display update
function displayUpdate(x,y){
    const addamount = document.getElementById(x).innerText;
    const addNumber = parseFloat(addamount);
    const totalNumber = y + addNumber;
    document.getElementById(x).innerText = totalNumber;
}

