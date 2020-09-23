'use strict'
const menuSectionDisplay = document.getElementById("menu-section");
const menuSection = document.querySelectorAll("#menu-section ul li")
const playSection = document.getElementById("play-section");
const ruleSection = document.getElementById("rule-section");
const rankingSection = document.getElementById("ranking-section");

menuSection.forEach(button => {
    button.addEventListener("click", function (x) {
        const test = x.target.textContent
        if (test === "JUGAR") {
            menuSectionDisplay.style.display = "none"
            playSection.style.display = "block"
        }
    })
})
