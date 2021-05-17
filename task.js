function convertFahrToCelsius () {
    let f = document.getElementById("data").value;
    let c = (f - 32) * 5/9;
    document.getElementById("res").innerText = `${f} F = ${c} C`;
}