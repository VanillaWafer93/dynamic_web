const menuButton = document.querySelector("button");
const menu = document.querySelector(".menu_buttons");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
handleResize(); 


const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return; 


  const fullSrc = img.src.split("-")[0] + "-full.jpeg";
  const altText = img.alt;


  const modal = document.createElement("dialog");
  modal.innerHTML = `
    <img src="${fullSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;
  document.body.appendChild(modal);
  modal.showModal();


  modal.querySelector(".close-viewer").addEventListener("click", () => modal.close());


  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });


  modal.addEventListener("close", () => modal.remove());
});