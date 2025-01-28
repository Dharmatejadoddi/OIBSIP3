function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let resultText = "";

    if (isNaN(temp)) {
        document.getElementById("result").innerText = " Please enter a valid number!";
        return;
    }

    if (unit === "C") {
        resultText = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F | ${(temp + 273.15).toFixed(2)}K`;
    } else if (unit === "F") {
        resultText = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else {
        resultText = `${temp}K = ${(temp - 273.15).toFixed(2)}°C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    document.getElementById("result").innerText = ` Converted Value: ${resultText}`;
}
