"use strict"

let inputElem = document.querySelector("input[type=number]");
let btn = document.querySelector("button");
let showPass = document.querySelector(".password");
let uppercaseCheck = document.getElementById('checkbox');
showPass.style.height = "60px";

const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';

let ifChecked;

uppercaseCheck.addEventListener("change", (e) => {
    ifChecked = (e.target.checked ? true : false);
    return ifChecked
})

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let lengthIn = e.target.elements[0].value;

    if (lengthIn) {

        showPass.innerText = getRandomInt(lengthIn, ifChecked);
        showPass.style.fontSize = "32px"

        function getRandomInt(length, mixedCase) {

            let randomPass = "";

            for (let i = 0; i < length; i++) {
                let randomIndex = Math.floor(Math.random() * charset.length);
                let char = charset[randomIndex];
                randomPass = randomPass + char
            }

            if (mixedCase == true) {
                let randomPassUpper = randomPass.split("").map((item, index) => {
                    if ((index + 1) % 3 == 0) {
                        return item.toUpperCase()
                    } else {
                        return item
                    }
                });
                randomPass = randomPassUpper.join("")
            }
            return randomPass;
        }

    } else {
        showPass.innerText = "⬇️ Please enter the length";
        showPass.style.fontSize = "22px";               
    }

})