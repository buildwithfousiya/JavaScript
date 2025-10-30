let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " JavaScript!";


let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "new unique value";