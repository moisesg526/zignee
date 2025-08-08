let pkgBlock = document.querySelector(".pkg-block");
let deliveredBtn = document.querySelector(".delivered-btn");
deliveredBtn.addEventListener("click", packageDelivered);

function packageDelivered() {
  console.log("Changing status to delivered");
  pkgBlock.style.opacity = "0.2";
  deliveredBtn.style.display = "none";
}
