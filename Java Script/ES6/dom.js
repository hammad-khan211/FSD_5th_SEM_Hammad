const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerHTML="Hi we are studying dom";
div.appendChild(h1);
const id = document.getElementById("root");
id.appendChild(div);