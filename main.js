const d = document;

function clickInput(input) {
  const $borde = d.querySelector(input);

  d.addEventListener("click", (e) => {
    if (e.target.matches(input)) {
      $borde.classList.add("border");
    }
    if (!e.target.matches(input)) {
      $borde.classList.remove("border");
    }
  });
  d.addEventListener("mouseover", (e) => {
    if (e.target.matches(input)) {
      $borde.classList.add("border");
      $borde.enabled = true;
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  clickInput(".form-control");
});
