class createButton {
	#arrayColor = [];
	constructor() {
		this.#createArrayColor();
	}
	Button(classButton, text) {
		const button = document.createElement("button");

		if (classButton) {
			button.classList = classButton;
		}
		if (text) {
			button.textContent = text;
		}
		return button;
	}

	#randomNumber() {
		const generate = Math.floor(Math.random() * 15);
		if (generate === 10) return "A";
		if (generate === 11) return "B";
		if (generate === 12) return "C";
		if (generate === 13) return "D";
		if (generate === 14) return "E";
		if (generate === 15) return "F";
		return generate;
	}

	#createArrayColor() {
		for (let i = 0; i < 50; i++) {
			this.#arrayColor.push(
				`#${this.#randomNumber()}${this.#randomNumber()}${this.#randomNumber()}${this.#randomNumber()}`
			);
		}
	}
	action(button) {
		const that = this;
		button.addEventListener("click", function () {
			console.log(`${that.#arrayColor}`);
			const body = document.querySelector("body");
			body.style.background =
				that.#arrayColor[Math.floor(Math.random() * that.#arrayColor.length)];
		});
	}
}

module.exports = new createButton();
