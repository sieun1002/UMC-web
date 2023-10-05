const openBtn = document.getElementById("openButton");
const closeBtn = document.getElementById("closeButton");
const modal = document.querySelector(".modalDiv");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};
