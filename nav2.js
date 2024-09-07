const line = document.querySelector(".line");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const positions = {
  sct1: { transform: "translateX(598%)", width: "50px" },
  sct2: { transform: "translateX(759%)", width: "50px" },
  sct3: { transform: "translateX(923%)", width: "50px" },
  sct4: { transform: "translateX(1085%)", width: "50px" },
  sct5: { transform: "translateX(877%)", width: "70px" },
  sct6: { transform: "translateX(1165%)", width: "60px" },
};

const updateIndicator = (sectionId) => {
  const pos = positions[sectionId];
  if (pos) {
    line.style.transform = pos.transform;
    line.style.width = pos.width;
    line.style.transition = "0.5s";
  }
};

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      pageYOffset >= sectionTop - 50 &&
      pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  if (current) {
    updateIndicator(current);
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
