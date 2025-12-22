let userChoices = document.querySelectorAll(".user h4");
let userClicks = document.querySelectorAll(".user");
let gameResult = document.querySelector(".game-result");
let showResult = document.querySelector("#gameResult");
let gameModel = document.querySelector(".game-model-container");
let Materials = ["Rock", "Paper", "Scisor"];


userClicks.forEach((curr) => {
    curr.addEventListener("click", () => {
        
        let userchoice = curr.querySelector("h4").innerText;
        let computerChoice = Materials[Math.floor(Math.random() * Materials.length)];
        if (userchoice == "Rock" && computerChoice == "Paper") {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: User Win</strong>`
        } else if (userchoice == "Rock" && computerChoice == "Scisor") {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: Computer Win</strong>`
        } else if (userchoice == "Paper" && computerChoice == "Rock") {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: Computer Win</strong>`
        } else if (userchoice == "Paper" && computerChoice == "Scisor") {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: Computer Win</strong>`
        } else if (computerChoice == userchoice) {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: Game Draw</strong>`
        } else if (userchoice == "Scisor" && computerChoice == "Paper") {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: User Win</strong>`
        } else if (userchoice == "Scisor" && computerChoice == "Rock") {
            showResult.innerHTML = `user choice <span class="userchoices">"${userchoice}"</span> and computer choice <span class="computerchoices">"${computerChoice}"</span> <strong class="winners">: Computer Win</strong>`
        }

    })
})

gameModel.addEventListener("click",() => {
    gameModel.classList.add("active")
})