let box = document.getElementById("box-1"),
input = document.querySelector("input");

input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
});
