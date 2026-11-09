console.log("JavaScript running in browser");

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    alert("Hello from JavaScript!");
});



setTimeout(() => {
    console.log("HEllo i am after timeout")
}, 5000);