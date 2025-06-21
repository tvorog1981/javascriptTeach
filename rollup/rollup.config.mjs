import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-css-only";
import image from "@rollup/plugin-image";
import serve from "rollup-plugin-serve";
import { babel } from "@rollup/plugin-babel";
import livereload from "rollup-plugin-livereload";
export default {
	input: "src/main.js",
	output: {
		file: "dist/main.js",
		format: "cjs",
	},
	plugins: [
		livereload({
			watch: "dist",
		}),
		babel({ babelHelpers: "bundled" }),
		serve({ contentBase: "dist" }),
		image(),
		terser(),
		css({
			output: "assets/bundle.css",
		}),
	],
};
