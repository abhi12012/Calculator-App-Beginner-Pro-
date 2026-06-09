let display = document.getElementById("display");
let memory = 0;
let history = [];
let historyBox = document.getElementById("historyBox");

function appendValue(value) {
    let last = display.value.slice(-1);
    let ops = ["+", "-", "*", "/"];

    if (ops.includes(value) && ops.includes(last)) return;

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (!display.value) return;

    try {
        let expression = display.value;
        let result = Function("return " + expression)();

        if (isNaN(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

        history.push(expression + " = " + result);
        showHistory();

    } catch {
        display.value = "Error";
    }
}

function showHistory() {
    historyBox.innerHTML = "";

    if (history.length === 0) {
        historyBox.innerHTML = "No history";
        return;
    }

    history.forEach(item => {
        let p = document.createElement("p");
        p.innerText = item;
        historyBox.appendChild(p);
    });
}

function clearHistory() {
    history = [];
    historyBox.innerHTML = "History cleared";
}

// Memory
function memoryClear() { memory = 0; }
function memoryRecall() { display.value += memory; }
function memoryAdd() { memory += Number(display.value || 0); }
function memorySub() { memory -= Number(display.value || 0); }

// Theme
function toggleTheme() {
    document.body.classList.toggle("light");
}