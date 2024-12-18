let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentValue = '';

buttons.forEach(button => {
	button.addEventListener('click', () => {
		let value = button.textContent;

		if (value === 'C') {
			currentValue = '';
			display.value = '';
		} else if (value === '=') {
			let result = eval(currentValue);
			display.value = result;
			currentValue = result.toString();
		} else {
			currentValue += value;
			display.value = currentValue;
		}
	});
});
