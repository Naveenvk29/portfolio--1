function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += "responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
// daremode
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// tpying effetc
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "coder", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".scoical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srleft = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srleft.reveal(".about-info", { delay: 100 });
srleft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

document.querySelectorAll(".section{id}");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionsHeight = current.offsetHeight,
      sectionTop = current.offsettop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionsHeight) {
      document
        .querySelector(".nav-menu a [href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a [href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
