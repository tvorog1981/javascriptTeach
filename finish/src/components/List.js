import { Component } from "../core/Component";
import { ListItem } from "./ListItem";

export class List extends Component {
	setup(props) {
		this.$rootElement = document.createElement("div");
		this.$rootElement.className = "donates-container";
		this.$h1 = document.createElement("h1");
		this.$h1.textContent = "Список донатов";
		this.showItem(this.props);
		this.$rootElement.append(this.$h1);
	}
	showItem(item) {
		const main = document.createElement("div");
		item.list.map((el) => {
			main.append(this.createElement(el));
		});

		this.$h1.append(main);
	}
	createElement(e) {
		const el = new ListItem({
			e: e,
			removeElement: this.removeElement.bind(this),
		});

		return el.showDonate();
	}
	removeElement(elem) {
		this.props.removeItem(elem);
	}
}
