let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " JavaScript!";


let divs = document.querySelectorAll(".box");

for (div of divs) {
    console.log(div.innerText);
}

divs[0].innerText = "new unique value";