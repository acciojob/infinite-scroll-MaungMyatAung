//your code here!
const list = document.getElementById("infi-list");
let itemCount = 0;

// Add initial 10 list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

addItems(10);

// Add more items when user scrolls to the bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addItems(2);
  }
});

