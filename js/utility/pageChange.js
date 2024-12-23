function pageChange(id){
    document.getElementById("donation-page").classList.add("hidden");
    document.getElementById("history-page").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");

}