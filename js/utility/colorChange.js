function colorChange(id) {
  const blockbtn = document.getElementById(id);
  blockbtn.style.backgroundColor = "white";
  blockbtn.style.border = "1px solid #a3e635";
  blockbtn.style.color= "#6b7280";
}

function colorReset(id){
    const resetbtn = document.getElementById(id);
    resetbtn.style.backgroundColor = "#a3e635";
    resetbtn.style.border = "none";
    resetbtn.style.color= "black";
}