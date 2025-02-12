document.getElementById('Inputnumber').addEventListener('input', function (e) {
    const value = e.target.value;
    const num = parseInt(value);
    const messageElement = document.getElementById('message');
    const resultElement = document.getElementById('result');

    if (!Number.isInteger(num)) {
        messageElement.textContent = "Please enter a valid number";
        resultElement.innerHTML = "";
        return;
    }

    if (num < 0) {
        messageElement.textContent = "Enter a positive value";
        resultElement.innerHTML = "";
        return;
    }

    messageElement.textContent = "";
    resultElement.innerHTML = `<p>Next 3 numbers:</p><ul>
        <li>${num + 2}</li>
        <li>${num + 4}</li>
        <li>${num + 6}</li>
    </ul>`;
});
