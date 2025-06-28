import { Component } from "../core/Component";

export class ListItem extends Component {
	setup(props) {
		this.props = props;
		this.$rootElement = document.createElement("div");
		this.$rootElement.className = "donate-item";
	}
	showDonate() {
		const main = document.createElement("div");
		main.classList = "list-donate";
		const date = document.createElement("span");

		const parseDate = `${this.parseDate(this.props.e.date)} - ${
			this.props.e.donate
		}$`;
		date.textContent = parseDate;
		const button = document.createElement("button");
		button.classList = "button-donate";
		button.textContent = "Удалить";
		const then = this;
		button.addEventListener("click", function () {
			then.props.removeElement(then.props.e.date);
		});
		main.append(date);
		main.append(button);
		this.$rootElement.append(main);
		return this.$rootElement;
	}
	parseDate(d) {
		const date = new Date(d);
		const n = date.getDay();
		const m = date.getMonth();
		const y = date.getFullYear();
		const h = date.getHours();
		const mm = date.getMinutes();
		const ss = date.getSeconds();
		return `${n}/${m}/${y}, ${h}:${mm}:${ss}`;
	}
}
