// Enter value to input box.
for (let i = 0; i < document.querySelectorAll(".key-btn").length; i++) {
    document.querySelectorAll(".key-btn")[i].addEventListener("click", function () {
        var buttonValue = this.value;
        document.querySelector(".live-result").value += buttonValue;
    });
}

// Insert backspace to input box.
document.querySelector(".del-btn").addEventListener("click", function() {
    addBackspace();
});

// Clear input box.
document.querySelector(".reset-btn").addEventListener("click", function() {
    clear();
});

// Evaluates the expression.
document.querySelector(".equals-btn").addEventListener("click", function() {
    calcResult();
});

// Logic for keypress.
document.addEventListener("keydown", function (event) {
    var activeButton;
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9') {
        document.querySelector(".live-result").value += event.key;
        activeButton = document.querySelector("." + "btn" + event.key);
    } 
    else if (event.key == '+') {
        document.querySelector(".live-result").value += event.key;
        activeButton = document.querySelector(".btnPlus");
    }
    else if (event.key == '-') {
        document.querySelector(".live-result").value += event.key;
        activeButton = document.querySelector(".btnMinus");
    }
    else if (event.key == '*') {
        document.querySelector(".live-result").value += event.key;
        activeButton = document.querySelector(".btnMult");
    }
    else if (event.key == '/') {
        document.querySelector(".live-result").value += event.key;
        activeButton = document.querySelector(".btnDiv");
    }
    else if (event.key == '.') {
        document.querySelector(".live-result").value += event.key;
        activeButton = document.querySelector(".btnDot");
    }
    else if (event.key == 'Enter') {
        calcResult();
        activeButton = document.querySelector(".equals-btn");
    }
    else if (event.key == 'Backspace') {
        addBackspace();
        activeButton = document.querySelector(".del-btn");
    }
    else if (event.key == 'Escape') {
        clear();
        activeButton = document.querySelector(".reset-btn");
    }
    buttonAnimation(activeButton);
});

// Calculates result.
function calcResult() {
    let x = document.querySelector(".live-result").value;
    let y = eval(x);
    document.querySelector(".live-result").value = y;
}

// Insert backspace in input box.
function addBackspace() {
    let inputValue = document.querySelector(".live-result").value;
    document.querySelector(".live-result").value = inputValue.substr(0, inputValue.length - 1);
}

// Clear input box.
function clear() {
    document.querySelector(".live-result").value = "";
}

// Adds press animation to btns on keypress.
function buttonAnimation(activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 250);
}

// Logic for color change of select theme currently.


// Logic for switching between themes.
for (let i = 0; i < document.querySelectorAll(".theme-btn").length; i++) {
    document.querySelectorAll(".theme-btn")[i].addEventListener("click", function () {
        // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
        // Create new link Element
        var link = document.createElement('link');
        // Set the attributes for link element 
        link.rel = 'stylesheet';
        link.type = 'text/css';
        if (i === 0) {
            link.href = 'theme1.css';
            // document.querySelectorAll(".theme-btn")[i].style.backgroundColor = "hsl(6, 63%, 50%)";
            // document.querySelectorAll(".theme-btn")[i].style.color = "hsl(0, 0%, 100%)";
            // document.querySelectorAll(".theme-btn")[i].style.border = "1.5px solid hsl(6, 70%, 34%)";
        } else if (i === 1) {
            link.href = 'theme2.css';
            // document.querySelectorAll(".theme-btn")[i].style.backgroundColor = "hsl(25, 98%, 40%)";
            // document.querySelectorAll(".theme-btn")[i].style.color = "hsl(0, 0%, 100%)";
            // document.querySelectorAll(".theme-btn")[i].style.border = "1.5px solid hsl(25, 99%, 27%)";
        } else if (i === 2) {
            link.href = 'theme3.css';
            // document.querySelectorAll(".theme-btn")[i].style.backgroundColor = "hsl(176, 100%, 44%)";
            // document.querySelectorAll(".theme-btn")[i].style.color = "hsl(198, 20%, 13%)";
            // document.querySelectorAll(".theme-btn")[i].style.border = "1.5px solid hsl(177, 92%, 70%)";
        }
        // Append link element to HTML head
        head.appendChild(link);
    });
}