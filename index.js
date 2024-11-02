window.onscroll = function () {
  const button = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('active');
}
