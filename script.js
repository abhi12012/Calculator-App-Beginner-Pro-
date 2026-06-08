let display = document.getElementById("display");

let memory = 0;

let history = [];

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}



function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.value += memory;
}

function memoryAdd() {
    try {
        memory += Number(eval(display.value));
    } catch {
        display.value = "Error";
    }
}



function memorySub() {
    try {
        memory -= Number(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function calculate() {
    try {

        if (display.value === "") {
            display.value = "0";
            return;
        }

        let expression = display.value;
        let result = Function("return " + expression)();

        if (result === undefined || isNaN(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

        // history save
        history.push(expression + " = " + result);

    } catch {
        display.value = "Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("light");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("light")) {
        btn.innerText = "🌞 Mode";
    } else {
        btn.innerText = "🌙 Mode";
    }
}

function showHistory() {
    alert(history.join("\n"));
}