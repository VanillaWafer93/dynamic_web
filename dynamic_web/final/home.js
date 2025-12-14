const input = document.querySelector(".code-box");
const correctCode = "IAmTheCode1";

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {

        if (input.value === correctCode && !document.getElementById("startPuzzleBtn")) {

            const btn = document.createElement("button");
            btn.id = "startPuzzleBtn";
            btn.textContent = "Start Puzzle";

            // makes it so it sends you to the puzzle page
            btn.addEventListener("click", () => {
                window.location.href = "puzzle-page.html";
            });

            document.querySelector(".example-puzzle").appendChild(btn);
        } else {
            alert("Incorrect code. Try again!");
            input.value = "";
        }
    }
});