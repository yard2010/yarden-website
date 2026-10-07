console.log("Hello World!");
setupCounter();

function setupCounter() {
  let count = 0;

  function increment() {
    count++;
    document.querySelector("#count").textContent = count;
  }

  function decrement() {
    count--;
    document.querySelector("#count").textContent = count;
  }

  document.querySelector("#increment").addEventListener("click", increment);
  document.querySelector("#decrement").addEventListener("click", decrement);
}
