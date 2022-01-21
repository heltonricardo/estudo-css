const colors = {
  p: "#388e3c",
  ol: "#fbc02d",
  ul: "#5e35b1",
  div: "#1565c0",
  nav: "#64dd17",
  body: "#25b6da",
  form: "#9f6581",
  main: "#00acc1",
  span: "#e53935",
  footer: "#304ffe",
  header: "#d81b60",
  padrao: "#616161",
  section: "#f67809",

  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
  },
};

document.querySelectorAll(".tag").forEach((elemento) => {
  const tagName = elemento.tagName.toLowerCase();

  elemento.style.borderColor = colors.get(tagName);

  if (!elemento.classList.contains("noLabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    elemento.insertBefore(label, elemento.childNodes[0]);
  }
});
