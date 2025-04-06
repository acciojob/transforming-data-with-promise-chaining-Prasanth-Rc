//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn');
  const output = document.getElementById('output');
  
  btn.addEventListener('click', function() {
    const inputNumber = Number(document.getElementById('ip').value);
    
    output.textContent = '';
    
    new Promise((resolve) => {
      setTimeout(() => {
        output.textContent = `Result: ${inputNumber}`;
        resolve(inputNumber);
      }, 2000);
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((error) => {
      output.textContent = `Error: ${error.message}`;
    });
  });
});