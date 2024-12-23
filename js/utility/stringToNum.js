function convertToNum(id)
{
    const char = document.getElementById(id).innerText;
    const num = parseFloat(char);
    return num;
}