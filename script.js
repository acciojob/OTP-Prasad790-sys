//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value) {
            // Focus the next input
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            // Clear the current input
            if (!input.value && index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});