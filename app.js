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
    const inputDeposite = document.getElementById('input-deposite').value;
    if(isNaN(inputDeposite)){
        alert('Please give numbers only')
    }
    const depositeNumber = parseFloat(inputDeposite);
    
    const addDeposite = document.getElementById('display-deposite').innerText;
    const addDepositeNumber = parseFloat(addDeposite);
    const totalDeposite = depositeNumber + addDepositeNumber;
    document.getElementById('display-deposite').innerText = totalDeposite;
    
    const displayBalance = document.getElementById('display-balance').innerText;
    const displayNumber = parseFloat(displayBalance);
    const totalDisplay = displayNumber + depositeNumber;  
    document.getElementById('display-balance').innerText = totalDisplay;
    document.getElementById('input-deposite').value = '';
})
//Withdraw button handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function() {
    const inputWithdraw = document.getElementById('input-withdraw').value;
    const withdrawNumber = parseFloat(inputWithdraw);

    const minusWithdraw = document.getElementById('display-withdraw').innerText;
    const minusWithdrawNumber = parseFloat(minusWithdraw);
    
    const totalWithdraw = withdrawNumber + minusWithdrawNumber;
    document.getElementById('display-withdraw').innerText = totalWithdraw;

    const displayBalance = document.getElementById('display-balance').innerText;
    const displayNumber = parseFloat(displayBalance);
    console.log(displayNumber);
    const totalDisplay = displayNumber - withdrawNumber;
    console.log(totalDisplay);
    document.getElementById('display-balance').innerText = totalDisplay;

    document.getElementById('input-withdraw').value = '';
})