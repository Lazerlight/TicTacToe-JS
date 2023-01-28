const cellEl = document.querySelectorAll("[data-cell]");

cellEl.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});
function handleClick() {
  console.log("KOROROR");
}
