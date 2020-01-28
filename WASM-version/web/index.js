import init 			from "../pkg/dalacamp_9_gator_wasm.js";
import correct_question from "../pkg/dalacamp_9_gator_wasm.js";

const runWasm = async () => {
	// Instantiate our wasm module
	const rust = await init("../pkg/dalacamp_9_gator_wasm_bg.wasm");
	if (rust.confirm() === 42) {
		console.log("WASM loaded, compiled and run");
	} else {
		console.log("Some WASM error, great...");
	}
	console.log(rust.correct_question(0, "lila"));

	document.getElementsByTagName("body")[0].innerHTML += "<button id='theButton'>A button</button>";

	document.getElementById("theButton").addEventListener("click", () => {
		const result = rust.correct_question(0, "lila");
		confirm(result);
	});
};
runWasm();