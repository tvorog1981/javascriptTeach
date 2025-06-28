import { Component } from "../core/Component";

export class Form extends Component {
	setup(props) {
		this.$rootElement = document.createElement("form");
		this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
		this.$rootElement.className = "donate-form";
		this.$props = props;
		this.Donate = {
			count: 0,
		};
		// first input
		this.$inputOne = document.createElement("input");
		this.$inputOne.id = "OneInput";
		this.$inputOne.setAttribute("name", "OneInput");
		this.$inputOne.placeholder = "Ввдедите сумму доната";
		this.$inputOne.setAttribute("type", "text");
		this.$inputOne.classList = "donate-form__donate-input";
		this.$inputOne.addEventListener("change", this.handleInput.bind(this));

		this.$label = document.createElement("label");
		this.$label.classList = "donate-form__input-label";
		this.$label.innerHTML = "Введите сумму в $";
		this.$label.htmlFor = "OneInput";

		this.$rootElement.append(this.$label);
		this.$rootElement.append(this.$inputOne);

		this.$button = document.createElement("button");
		this.$button.textContent = "Заданатить";
		this.$button.classList = "donate-form__submit-button";
		this.$button.disabled = true;

		this.$rootElement.append(this.$button);
	}

	handleInput(event) {
		const numberPattern = /\d+/g;
		let count = event.target.value.match(numberPattern);
		if (count === null) {
			event.target.value = "";
		} else if (count > 1 && count <= 100) {
			this.$button.disabled = false;
			this.Donate.count = count;
			console.log(this.Donate.count);
		} else {
			event.target.value = "";
		}
	}

	handleSubmit(event) {
		event.preventDefault();

		this.$props.onItemCreate({
			date: Date.now(),
			donate: this.Donate.count,
		});
		this.Donate.count = 0;
		this.$button.disabled = true;
		this.$inputOne.value = "";
	}
}
