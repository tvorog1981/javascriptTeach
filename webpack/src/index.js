import "./style.css";
import freebsd from "./images/freebsd.gif";

const main = document.createElement("div");
const img = document.createElement("img");
img.src = freebsd;
img.classList = "logo";
main.append(img);
const container = document.querySelector(".container");
container.append(main);
