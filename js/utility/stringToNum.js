function convertToNum(id)
{
    const char = document.getElementById(id).innerText;
    const num = parseFloat(char);
    return num;
}
function convertToNum2(id)
{
    const char = document.getElementById(id).value;
    const num = parseFloat(char);
    return num;
}