document.addEventListener('DOMContentLoaded', (event) => {
  const resultDiv = document.querySelector('.result');
  let currentInput = '';
  let expression = '';

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.onclick = function () {
      const value = this.textContent;

      if (value === 'C') {
        currentInput = '';
        expression = '';
        resultDiv.textContent = '';
      } else if (value === '=') {
        if (expression || currentInput) {
          expression += currentInput;
          try {
            const result = Function('return ' + expression)();
            resultDiv.textContent = result;
            currentInput = result.toString();
            expression = '';
          } catch {
            resultDiv.textContent = 'Error';
            currentInput = '';
            expression = '';
          }
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput || expression) {
          expression += currentInput + value;
          resultDiv.textContent = expression;
          currentInput = '';
        }
      } else {
        currentInput += value;
        resultDiv.textContent = expression + currentInput;
      }
    };
  });
});
