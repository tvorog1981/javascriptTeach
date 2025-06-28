import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";

export class App extends Component {
	setup(props) {
		this.$rootElement = document.createElement("div");
		this.$rootElement.className = "app";

		this.state = {
			arrDonate: [],
		};

		// if (this.state.arrDonate.lenght) {
		// 	const span = document.createElement("span");
		// 	let sum = 0;
		// 	for (let i = 0; i < this.state.arrDonate.length; i++) {
		// 		sum += Number(this.state.arrDonate[i].donate[0]);
		// 	}
		// 	console.log(sum);
		// }

		const donateForm = new Form({ onItemCreate: this.onItemCreate.bind(this) });
		this.$rootElement.appendChild(donateForm.$rootElement);

		this.donateList = new List({
			list: this.state.arrDonate,
			onItemCreate: this.onItemCreate.bind(this),
		});

		this.$rootElement.appendChild(this.donateList.$rootElement);
	}

	onItemCreate(amount) {
		this.state.arrDonate.push(amount);
		const r = document.querySelector(".donates-container");

		r.remove();

		const total = document.querySelector(".total-amount");

		if (total != null) {
			const sum = this.countDonate(this.state.arrDonate);
			total.remove();
			const t = document.createElement("span");
			t.classList = "total-amount";
			t.textContent = `Итого: ${sum}`;
			const app = document.querySelector(".app");
			app.prepend(t);
		} else {
			const sum = this.countDonate(this.state.arrDonate);
			const t = document.createElement("span");
			t.classList = "total-amount";
			t.textContent = `Итого: ${sum}`;
			const app = document.querySelector(".app");
			app.prepend(t);
		}

		let donateList = new List({
			list: this.state.arrDonate,
			onItemCreate: this.onItemCreate.bind(this),
			removeItem: this.removeItem.bind(this),
		});

		this.$rootElement.appendChild(donateList.$rootElement);
	}
	removeItem(remove) {
		const filter = this.state.arrDonate.filter((elem) => elem.date != remove);
		this.state.arrDonate = filter;
		const total = document.querySelector(".total-amount");

		if (total != null) {
			const sum = this.countDonate(this.state.arrDonate);
			total.remove();
			const t = document.createElement("span");
			t.classList = "total-amount";
			t.textContent = `Итого: ${sum}`;
			const app = document.querySelector(".app");
			app.prepend(t);
		} else {
			const sum = this.countDonate(this.state.arrDonate);
			const t = document.createElement("span");
			t.classList = "total-amount";
			t.textContent = `Итого: ${sum}`;
			const app = document.querySelector(".app");
			app.prepend(t);
		}

		const r = document.querySelector(".donates-container");
		r.remove();
		let donateList = new List({
			list: this.state.arrDonate,
			onItemCreate: this.onItemCreate.bind(this),
			removeItem: this.removeItem.bind(this),
		});

		this.$rootElement.appendChild(donateList.$rootElement);
	}
	countDonate(d) {
		let sum = 0;
		for (let i = 0; i < d.length; i++) {
			sum += Number(d[i].donate);
		}
		return sum;
	}
}
