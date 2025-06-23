import "./index.css";
import createButton from "./utils/createButton";
("./utils/createButton.js");
const main = document.querySelector(".container");
const button = createButton.Button("button", "Изменить цвет страницы");
createButton.action(button);
main.append(button);
