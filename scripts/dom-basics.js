const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP,innerText = "this was added through Javascro]ipt";
newSection.appendChild(newP);

document.body.appendChild(newSection);






//let fullName = 'Giovanna Liz Cruz Moura';
//const h1 = document.querySelector('h1');
//h1.innerHTML += '<em>' + fullName + '</em>';
//
//
//const section = document.createElement('section');
//const h2 = document.createElement('h2');
//h2.textContent = 'Section 3';
//const p = document.createElement('p');
//p.textContent = 'This is a paragraph in section 3';
//
//
//section.appendChild(h2);
//section.appendChild(p);
//document.body.appendChild(section);
