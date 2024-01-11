console.log("Hello world!");

const body = document.querySelector("body");

console.log(body);

const h1 = document.querySelector("h1");

h1.textContent = "Hello world!";
console.log(h1);

const image = document.querySelector("img");
image.src = "https://m.media-amazon.com/images/I/81sMEvzsAxL.jpg";

const h2 = document.createElement("h2");
h2.textContent = "New h2 tag added with js!";
body.appendChild(h2);

const list = document.createElement("ul");

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const listItemsElement = document.getElementById("list");

listItemsElement.innerHTML = items.map(item => `<li>${item}</li>`).join("");

h1.remove();