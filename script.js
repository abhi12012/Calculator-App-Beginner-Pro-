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
        // अगर input खाली है
        if (display.value === "") {
            display.value = "0";
            return;
        }

        // calculation
        let result = eval(display.value);

        // NaN या undefined check
        if (result === undefined || result === null) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}