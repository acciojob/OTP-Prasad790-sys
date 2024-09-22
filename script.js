//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value) {
            // Focus the next input with a small delay
            setTimeout(() => {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }, 1);
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            // Clear the current input and focus the previous one if empty
            if (!input.value && index > 0) {
                setTimeout(() => {
                    inputs[index - 1].focus();
                }, 1);
            }
        }
    });
});