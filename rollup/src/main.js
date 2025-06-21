import "./index.css";
import freebsd from "./images/freebsd.gif";
import freebsd2 from "./images/freebsd2.png";
import freebsd3 from "./images/freebsd3.jpg";
const main = document.createElement("div");
main.classList = "container";
const body = document.querySelector("body");

if (document.URL.includes("index.html")) {
	body.classList = "index";
	const img = document.createElement("img");
	img.src = freebsd;
	img.style = "width:200px";
	body.prepend(img);
}
if (document.URL.includes("about.html")) {
	body.classList = "about";
	const img = document.createElement("img");
	img.src = freebsd2;
	img.style = "width:200px";
	body.prepend(img);
}
if (document.URL.includes("descriptions.html")) {
	body.classList = "descriptions";
	const img = document.createElement("img");
	img.src = freebsd3;
	img.style = "width:200px";
	body.prepend(img);
}
const ArrLinks = ["index", "about", "descriptions"];
function createElements(mainElements, arrLinks) {
	console.log(mainElements);
	let createUL = document.createElement("ul");
	createUL.classList = "list";
	console.log(arrLinks.length);
	for (let i = 0; i < arrLinks.length; i++) {
		const createLi = document.createElement("li");

		const createA = document.createElement("a");

		createA.classList = "link";
		createA.href = `${arrLinks[i]}.html`;
		createA.textContent = arrLinks[i];
		createLi.append(createA);
		createUL.append(createLi);
	}

	mainElements.append(createUL);
	body.append(mainElements);
}

createElements(main, ArrLinks);
