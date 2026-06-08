let display = document.getElementById("display");



function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {

        if (display.value === "") {
            display.value = "0";
            return;
        }

        // सिर्फ valid expression allow
        let result = Function("return " + display.value)();

        if (result === undefined || result === null || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
}
