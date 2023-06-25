let stack = [];
function push() {
  const inputBox = document.getElementById("inputBox");
  const element = inputBox.value.trim();
  
  if (element !== "") {
    if (stack.length < 15) {
      stack.push(element);
      updateStackVisual();
      document.getElementById("pushedElement").textContent = element;
    } else {
      alert("Stack is full!");
    }
  }var algoBox = document.getElementById("algo-box");
  algoBox.innerHTML = `
      <li class="algo-steps">
          Algorithm to push an item into stack.<br>
          1) If top = MAX then<br>
          Print "Stack is full";<br>
          Exit;<br>
          2) Otherwise<br>
          top = top + 1;<br>  
          Stack[top] = item;<br>
          3) End of If<br>
          4) Exit
      </li>`;
  inputBox.value = "";
}
function pop() {
  if (stack.length > 0) {
    const element = stack.pop();
    updateStackVisual();
    document.getElementById("poppedElement").textContent = element;
  } else {
    alert("Stack is empty!");
  }
  var algoBox = document.getElementById("algo-box");
    algoBox.innerHTML = `
        <li class="algo-steps">
            Algorithm to pop an element from stack.<br>
            1) If top = 0 then<br>
            Print "Stack is empty";<br>
            Exit;<br>
            2) Otherwise<br>
            Item = Stack[top];<br>
            top = top - 1;<br>
            3) End of If <br>
            4)Exit 
        </li>`;
}
function peek() {
  if (stack.length > 0) {
    const element = stack[stack.length - 1];
    document.getElementById("peekedElement").textContent = element;
  } else {
    alert("Stack is empty!");
  }
  var algoBox = document.getElementById("algo-box");
    algoBox.innerHTML = `
        <li class="algo-steps">
            Algorithm to peek the top element from the stack.<br>
            1) If top = 0 then<br>
            Print "Stack is empty";<br>
            Exit;<br>
            2) Otherwise<br>
            Item = Stack[top];<br>
            Print "Peeked element is: " + Item;<br>
            3) End of If <br>
            4) Exit
        </li>`;
}

function updateStackVisual() {
  const stackPositions = document.getElementsByClassName("stack-position");
  const stackLength = stack.length;
  
  
  for (let i = 0; i < stackPositions.length; i++) {
    stackPositions[i].textContent = "";
  }
  
  // Update stack positions starting from the top
  for (let i = 0; i < stackLength; i++) {
    const stackIndex = stackLength - 1 - i;
    stackPositions[stackIndex].textContent = stack[i];
  }
}

