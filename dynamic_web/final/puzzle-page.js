//Random variables I needed for the code
const input1 = document.querySelector(".input-1"); //input for user
const leftBars = document.querySelector(".left-bars"); //stage 2 bars
const rightBars = document.querySelector(".right-bars"); //stage 2 bars
const stageDesc = document.querySelector(".stage-desc"); //stage description
const puzzleStage = document.querySelector(".puzzle-stage"); //The puzzle stage 

//Codes for each stage
const stage1Code = "YouFoundMe";
const stage2Code = "16";
const stage3Code = "Snake";
const finalCode = "Coder"

let currentStage = 1;

input1.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    // Stage 1 checking
    if (currentStage === 1) {
        if (input1.value === stage1Code) {
            leftBars.innerHTML = "";
            rightBars.innerHTML = "";
            input1.value = "";

            // Stage 2
            currentStage = 2;
            input1.placeholder = "Enter code 2 here";
            puzzleStage.textContent = "Stage 2";
            stageDesc.textContent =
                "Now lets get a bit harder. Find the sum of the numbers hidden around the page";

            createStage2Grid(leftBars, ["5", "", "", "", "3", "", "", ""]);
            createStage2Grid(rightBars, ["", "", "8", "", "", "", "", ""]);
        } else {
            alert("Incorrect code. Try again!");
            input1.value = "";
        }
    }

    // Stage 2 checking
    else if (currentStage === 2) {
        if (input1.value === stage2Code) {
            leftBars.innerHTML = "";
            rightBars.innerHTML = "";
            input1.value = "";

            //Stage 3 
            currentStage = 3;
            input1.placeholder = "Enter code 3 here"
            document.body.style.backgroundColor = "purple";

            puzzleStage.textContent = "Stage 3";
            stageDesc.textContent = "So Close! Just unscramble the hidden letters for the code. Then it's on to the final stage!";

            createStage3Circles();

        } else {
            alert("Incorrect code. Try again!");
            input1.value = "";
        }
    }
    //Stage 3 checking
    else if (currentStage === 3) {
    if (input1.value === stage3Code) {
        input1.value = "";

        const circles = document.getElementById("stage3-circles");
        if (circles) {
            circles.remove();
        }

        puzzleStage.textContent = "WARNING";
        stageDesc.textContent = "The final stage contains flashing lights, continue with caution";

        //Final stage
        CreateWarningButton(); //this function also starts the final stage

    } else {
        alert("Incorrect code. Try again!");
        input1.value = "";
    }
}


    else if (currentStage === 4) {
    if (input1.value === finalCode) {
        input1.value = "";

        const lettersContainer = document.getElementById("final-stage-letters");
        if (lettersContainer) lettersContainer.remove();

        if (finalStageInterval) clearInterval(finalStageInterval); //this thing stops the looping colors

        document.body.style.backgroundColor = "white";
        puzzleStage.textContent = "Congratulations!";
        stageDesc.textContent = "You completed the puzzle! Thank you for playing and also thank you for a great semester!";
        input1.parentElement.remove();

        currentStage = 5;
    } else {
        alert("Incorrect code. Try again!");
        input1.value = "";
    }
}

});

// Stage 2 grid thing
function createStage2Grid(container, numbers) {
    container.style.gap = "10px";

    for (let i = 0; i < 8; i++) {
        const box = document.createElement("div");
        box.classList.add("bar");
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.marginBottom = "20px";
        box.style.backgroundColor = "black";
        box.style.color = "black";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.textContent = numbers[i] || "";
        container.appendChild(box);
    }
}
// Stage 3 circle thing
function createStage3Circles() {
    const puzzleSection = document.querySelector(".puzzle");

    const container = document.createElement("div");
    container.classList.add("stage3-circles");
    container.id = "stage3-circles";

    const letters = ["e", "S", "a", "n", "k"];

    letters.forEach(letter => {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.textContent = letter;
        container.appendChild(circle);
    });

    puzzleSection.appendChild(container);
}

//Warning before the final stage since it has flashing colors
function CreateWarningButton() {
    const puzzleArea = document.querySelector(".puzzle");

    const button = document.createElement("button");
    button.textContent = "Click to continue"
    button.classList.add("warning-button");
    button.id = "warning-button";

    button.addEventListener("click", () =>{
        StartFinalStage();
    });

    puzzleArea.appendChild(button);
}


let finalStageInterval;
function StartFinalStage() {
    const button = document.getElementById("warning-button");
    if (button) button.remove();

    document.body.style.backgroundColor = "blue";
    puzzleStage.textContent = "Final Stage!!!";
    stageDesc.textContent = "Welcome to the final stage! Unscramble the word to reveal the final code!";
    input1.placeholder = "Enter code 4 here"

    currentStage = 4;

    
    let toggle = false;

    finalStageInterval = setInterval(() => {
        document.body.style.backgroundColor = toggle ? "green" : "blue";
        toggle = !toggle;
    }, 500);

    createFinalStageLetters();

} 

function createFinalStageLetters() {
    const letters = [
        { char: "o", color: "blue" },
        { char: "C", color: "green" },
        { char: "e", color: "blue" },
        { char: "d", color: "green" },
        { char: "r", color: "blue" }
    ];

    const container = document.createElement("div");
    container.classList.add("final-stage-letters");
    container.id = "final-stage-letters";

    letters.forEach(letterObj => {
        const letter = document.createElement("span");
        letter.textContent = letterObj.char;
        letter.style.color = letterObj.color;
        letter.classList.add("final-letter");
        container.appendChild(letter);
    });

    const puzzleSection = document.querySelector(".puzzle");
    puzzleSection.appendChild(container);
}