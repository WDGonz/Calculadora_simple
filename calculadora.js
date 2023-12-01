document.getElementById('add').addEventListener('click', function() {
    performOperation('add');
  });
  
  document.getElementById('subtract').addEventListener('click', function() {
    performOperation('subtract');
  });
  
  document.getElementById('multiply').addEventListener('click', function() {
    performOperation('multiply');
  });
  
  document.getElementById('divide').addEventListener('click', function() {
    performOperation('divide');
  });
  
  function performOperation(operation) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
  
    let result;
    if (operation === 'add') {
        result = operand1 + operand2;
    } else if (operation === 'subtract') {
        result = operand1 - operand2;
    } else if (operation === 'multiply') {
        result = operand1 * operand2;
    } else if (operation === 'divide') {
        if (operand2 === 0) {
            document.getElementById('result').textContent = 'Error: División por cero';
            return;
        }
        result = operand1 / operand2;
    }
  
    document.getElementById('result').textContent = result;
  }
  