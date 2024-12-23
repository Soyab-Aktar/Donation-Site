
function payment(balanceBtnId, balanceInputId, balanceDisplayId, siteBalanceId,title) {
    document.getElementById(balanceBtnId).addEventListener('click', function() {
        let siteBalance = convertToNum(siteBalanceId);
        const currentBalance = convertToNum(balanceDisplayId);
        const addMoney = convertToNum2(balanceInputId);

        if(addMoney<siteBalance )
        {
            const newBalance = addMoney + currentBalance;
            siteBalance = siteBalance - addMoney;
    
            update(balanceDisplayId, newBalance);
            update(siteBalanceId, siteBalance);
            addtransaction(addMoney,title);
        }
        else
        {
            alert('Please Check your balance !');
            return;
        }
    });
}
