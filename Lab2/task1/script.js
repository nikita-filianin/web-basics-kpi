document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let pibInput = document.getElementById("pib");
    let facultyInput = document.getElementById("faculty");
    let birthdateInput = document.getElementById("birthdate");
    let addressInput = document.getElementById("address");
    let emailInput = document.getElementById("email");
    let resultDiv = document.getElementById("result");

    let pibPattern = /^[А-ЯІЇЄҐA-Z][а-яіїєґ'A-Za-z]+ [А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/;
    let facultyPattern = /^[А-ЯІЇЄҐA-Za-z]+$/;
    let birthdatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    let addressPattern = /^м\.\s[А-ЯІЇЄҐA-Za-z\s]+$/i;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;

    if (!pibPattern.test(pibInput.value)) {
        pibInput.classList.add("error");
        isValid = false;
    } else {
        pibInput.classList.remove("error");
    }

    if (!facultyPattern.test(facultyInput.value)) {
        facultyInput.classList.add("error");
        isValid = false;
    } else {
        facultyInput.classList.remove("error");
    }

    if (!birthdatePattern.test(birthdateInput.value)) {
        birthdateInput.classList.add("error");
        isValid = false;
    } else {
        birthdateInput.classList.remove("error");
    }

    if (!addressPattern.test(addressInput.value)) {
        addressInput.classList.add("error");
        isValid = false;
    } else {
        addressInput.classList.remove("error");
    }

    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add("error");
        isValid = false;
    } else {
        emailInput.classList.remove("error");
    }

    // Виведення результату
    if (isValid) {

        resultDiv.innerHTML = "<br>Введена інформація пройшла перевірку<br><br>" +
            "ПІБ: " + pibInput.value + "<br>" +
            "Факультет: " + facultyInput.value + "<br>" +
            "Дата народження: " + birthdateInput.value + "<br>" +
            "Адреса: " + addressInput.value + "<br>" +
            "Email: " + emailInput.value;
    } else {
        resultDiv.innerHTML = "Виправте виділені поля.";
    }
});
