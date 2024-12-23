
function payment(balanceBtnId, balanceInputId, balanceDisplayId, siteBalanceId,title) {
    document.getElementById(balanceBtnId).addEventListener('click', function() {
        let siteBalance = convertToNum(siteBalanceId);
        const currentBalance = convertToNum(balanceDisplayId);
        const addMoney = convertToNum2(balanceInputId);

        if(addMoney<siteBalance && addMoney>0 )
        {
            const newBalance = addMoney + currentBalance;
            siteBalance = siteBalance - addMoney;
    
            update(balanceDisplayId, newBalance);
            update(siteBalanceId, siteBalance);
            addtransaction(addMoney,title);
            popup();
        }
        else
        {
            alert('Please Check your balance or input money !');
            return;
        }
    });
}
