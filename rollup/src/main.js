import "./index.css";
const main = document.createElement("div");
main.classList = "container";
const body = document.querySelector("body");

if (document.URL.includes("index.html")) {
	body.classList = "index";
}
if (document.URL.includes("about.html")) {
	body.classList = "about";
}
if (document.URL.includes("descriptions.html")) {
	body.classList = "descriptions";
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
