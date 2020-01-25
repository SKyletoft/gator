import correct_question from "../pkg/dalacamp_9_gator_wasm.js";

const temp_function = async () => {
	let result = await correct_question(0, "lila");
	return result;
}
let result = temp_function();
console.log(result);