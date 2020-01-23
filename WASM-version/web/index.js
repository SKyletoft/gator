import init from "../pkg/dalacamp_9_gator_wasm.js";

const runWasm = async () => {
	// Instantiate our wasm module
	let rust = await init("../pkg/dalacamp_9_gator_wasm_bg.wasm");
};
runWasm();