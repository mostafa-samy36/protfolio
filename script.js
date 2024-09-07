const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");
const li5 = document.getElementById("li5");
const li6 = document.getElementById("li6");
const li7 = document.getElementById("li7");

const homob = document.getElementById("homob");
const abmob = document.getElementById("abmob");
const skmob = document.getElementById("skmob");
const womob = document.getElementById("womob");
const semob = document.getElementById("semob");
const comob = document.getElementById("comob");

const butcon = document.getElementById("butcon");
const pcont = document.getElementById("pcont");


homob.addEventListener("click", function () {
  li2.style.transform = "translateX(0%)";
  homob.style.color = "#697886";
  li2.style.transition = "0.6s";
  abmob.style.color = "#45505b";
  skmob.style.color = "#45505b";
  womob.style.color = "#45505b";
  semob.style.color = "#45505b";
  comob.style.color = "#45505b";

  li3.style.transform = "translateX(-105%)";
  li4.style.transform = "translateX(-105%)";
  li5.style.transform = "translateX(-105%)";
  li6.style.transform = "translateX(-105%)";
  li7.style.transform = "translateX(-105%)";
});

abmob.addEventListener("click", function () {
  li3.style.transform = "translateX(0%)";
  abmob.style.color = "#697886";
  li3.style.transition = "0.6s";
  homob.style.color = "#45505b";
  skmob.style.color = "#45505b";
  womob.style.color = "#45505b";
  semob.style.color = "#45505b";
  comob.style.color = "#45505b";

  li2.style.transform = "translateX(-105%)";
  li4.style.transform = "translateX(-105%)";
  li5.style.transform = "translateX(-105%)";
  li6.style.transform = "translateX(-105%)";
  li7.style.transform = "translateX(-105%)";
});

skmob.addEventListener("click", function () {
  li4.style.transform = "translateX(0%)";
  skmob.style.color = "#697886";
  li4.style.transition = "0.6s";
  homob.style.color = "#45505b";
  abmob.style.color = "#45505b";
  womob.style.color = "#45505b";
  comob.style.color = "#45505b";
  semob.style.color = "#45505b"; 

  li2.style.transform = "translateX(-105%)";
  li3.style.transform = "translateX(-105%)";
  li5.style.transform = "translateX(-105%)";
  li6.style.transform = "translateX(-105%)";
  li7.style.transform = "translateX(-105%)";
});

womob.addEventListener("click", function () {
  li5.style.transform = "translateX(0%)";
  womob.style.color = "#697886";
  li5.style.transition = "0.6s";
  homob.style.color = "#45505b";
  abmob.style.color = "#45505b";
  skmob.style.color = "#45505b";
  comob.style.color = "#45505b";
  semob.style.color = "#45505b";

  li2.style.transform = "translateX(-105%)";
  li3.style.transform = "translateX(-105%)";
  li4.style.transform = "translateX(-105%)";
  li6.style.transform = "translateX(-105%)";
  li7.style.transform = "translateX(-105%)";
});

semob.addEventListener("click", function () {
  li6.style.transform = "translateX(0%)";
  semob.style.color = "#697886";
  li6.style.transition = "0.6s";
  homob.style.color = "#45505b";
  abmob.style.color = "#45505b";
  womob.style.color = "#45505b";
  comob.style.color = "#45505b";
  skmob.style.color = "#45505b";

  li2.style.transform = "translateX(-105%)";
  li3.style.transform = "translateX(-105%)";
  li4.style.transform = "translateX(-105%)";
  li5.style.transform = "translateX(-105%)";
  li7.style.transform = "translateX(-105%)";
});

comob.addEventListener("click", function () {
  li7.style.transform = "translateX(0%)";
  comob.style.color = "#697886";
  li7.style.transition = "0.6s ";
  homob.style.color = "#45505b";
  abmob.style.color = "#45505b";
  womob.style.color = "#45505b";
  semob.style.color = "#45505b";
  skmob.style.color = "#45505b";

  li2.style.transform = "translateX(-105%)";
  li3.style.transform = "translateX(-105%)";
  li5.style.transform = "translateX(-105%)";
  li6.style.transform = "translateX(-105%)";
  li4.style.transform = "translateX(-105%)";
});

const che = document.getElementById('che');
const mob = document.getElementById('mob');

checkbox.addEventListener('change', function() {
    if (this.checked) {
      mob.style.transform = 'translateY(0%)';
      mob.style.transition = "0.6s";
    } else {
      mob.style.transform = 'translateY(-100%)';
      mob.style.transition = "0.6s";
    }
});

homob.addEventListener('click', function() {
  mob.style.transform = 'translateY(-100%)';
  mob.style.transition = "0.6s";
  mob.style.transitionDelay = "0.5s";
  checkbox.checked = false;
});

abmob.addEventListener('click', function() {
  mob.style.transform = 'translateY(-100%)';
  mob.style.transition = "0.6s";
  mob.style.transitionDelay = "0.5s";
  checkbox.checked = false;
});

skmob.addEventListener('click', function() {
  mob.style.transform = 'translateY(-100%)';
  mob.style.transition = "0.6s";
  mob.style.transitionDelay = "0.5s";
  checkbox.checked = false;
});

womob.addEventListener('click', function() {
  mob.style.transform = 'translateY(-100%)';
  mob.style.transition = "0.6s";
  mob.style.transitionDelay = "0.5s";
  checkbox.checked = false;
});

semob.addEventListener('click', function() {
  mob.style.transform = 'translateY(-100%)';
  mob.style.transition = "0.6s";
  mob.style.transitionDelay = "0.5s";
  checkbox.checked = false;
});

comob.addEventListener('click', function() {
  mob.style.transform = 'translateY(-100%)';
  mob.style.transition = "0.6s";
  mob.style.transitionDelay = "0.5s";
  checkbox.checked = false;
});

che.addEventListener("click", function () {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "scroll";
} else {
    document.body.style.overflow = "hidden";
}
});

homob.addEventListener("click", function () {
    document.body.style.overflow = "scroll";
});

abmob.addEventListener("click", function () {
    document.body.style.overflow = "scroll";
});

skmob.addEventListener("click", function () {
    document.body.style.overflow = "scroll";
});

womob.addEventListener("click", function () {
    document.body.style.overflow = "scroll";
});

semob.addEventListener("click", function () {
    document.body.style.overflow = "scroll";
});

comob.addEventListener("click", function () {
    document.body.style.overflow = "scroll";
});


butcon.addEventListener('click', () => {
  pcont.style.transform = `translateX(0%)`;

  setTimeout(() => {
      pcont.style.transform = `translateX(-70%)`;
  }, 3000);
});