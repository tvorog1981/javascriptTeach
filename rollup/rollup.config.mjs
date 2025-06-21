import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-css-only";
export default {
	input: "src/main.js",
	output: {
		file: "dist/main.js",
		format: "cjs",
	},
	plugins: [
		terser(),
		css({
			output: "assets/bundle.css",
		}),
	],
};
