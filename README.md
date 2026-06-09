# 🧮 Calculator App

🧮 Advanced Calculator App (Day 5 Upgrade 🚀)

# 🧮 Advanced Calculator

एक Modern Calculator Web App जो HTML, CSS और JavaScript से बनाया गया है।

## 🚀 Features

### Basic Operations
- ➕ Addition
- ➖ Subtraction
- ✖ Multiplication
- ➗ Division

### Advanced Features
- 💾 Memory System
  - M+ (Memory Add)
  - M- (Memory Subtract)
  - MR (Memory Recall)
  - MC (Memory Clear)

- 📜 Calculation History
  - सभी calculations save होती हैं
  - पुरानी calculations देख सकते हैं

- 🌙 Dark / Light Theme
  - Theme Switch Button
  - Better User Experience

- ⚠ Error Handling
  - Invalid calculations पर Error दिखाता है
  - Safe Calculation System

- 🛡 Safety Checks
  - Empty display handling
  - NaN checking
  - Undefined result protection

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📂 Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📖 How It Works

1. User number enter करता है।
2. User operation select करता है।
3. Calculator expression evaluate करता है।
4. Result display पर दिखता है।
5. Calculation history में save हो जाती है।
6. Memory buttons memory values manage करते हैं।

---

## 💾 Memory Functions

| Button | Function |
|----------|----------|
| M+ | Value Memory में Add करता है |
| M- | Value Memory से Subtract करता है |
| MR | Memory Value Show करता है |
| MC | Memory Clear करता है |

---

## 📜 History Feature

हर successful calculation history array में save होती है।

Example:

```text
10 + 20 = 30
50 - 15 = 35
8 * 5 = 40
```

---

## 🛡 Error Protection

Calculator में निम्न safety checks लगाए गए हैं:

```javascript
if (!display.value) {
    display.value = "";
}
```

और:

```javascript
if (result === undefined || isNaN(result)) {
    display.value = "Error";
    return;
}
```

इससे invalid calculations handle होती हैं।

---

## 🎯 Learning Goals

इस project से मैंने सीखा:

- DOM Manipulation
- Functions
- Arrays
- Events
- Error Handling
- Memory Management
- Theme Switching
- Git & GitHub Workflow

---

## 🔮 Future Improvements

- Keyboard Support
- Scientific Calculator
- Percentage Function
- Square Root
- Local Storage History
- Mobile Responsive Design

---

## 👨‍💻 Author

Abhishek Bansal

Learning Web Development Step by Step 🚀