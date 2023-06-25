const $items = document.querySelectorAll(".accordion button");
const icon = document.querySelector(".fa-plus");

function toggle() {
  const item = this.getAttribute("aria-expanded");

  for (i = 0; i < $items.length; i++) {
    $items[i].setAttribute("aria-expanded", "false");
  }

  if (item == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

$items.forEach((item) => item.addEventListener("click", toggle));
