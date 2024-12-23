
function payment(balanceBtnId, balanceInputId, balanceDisplayId, siteBalanceId) {
    document.getElementById(balanceBtnId).addEventListener('click', function() {
        let siteBalance = convertToNum(siteBalanceId);
        const currentBalance = convertToNum(balanceDisplayId);
        const addMoney = convertToNum2(balanceInputId);

        const newBalance = addMoney + currentBalance;
        siteBalance = siteBalance - addMoney;

        update(balanceDisplayId, newBalance);
        update(siteBalanceId, siteBalance);
    });
}
