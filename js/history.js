function addtransaction(amount,title) {
  const div = document.createElement("div");
  const time = paymentTime();
  div.classList.add("bg-lime-100");
  div.innerHTML = `
        <p class = "text-xl font-bold mb-3">${amount} Taka is ${title},Bangladesh</p>
        <p class = "font-light">${time}</p>
    `;

    div.style.borderRadius= "8px";
    div.style.padding= "8px";
    div.style.margin= "0px 8px";
    div.style.marginBottom= "12px";
    document.getElementById('history-page').appendChild(div);
}

