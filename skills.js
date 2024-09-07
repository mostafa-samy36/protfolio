document.addEventListener("DOMContentLoaded", function (event) {
  let circle = document.querySelectorAll(".circle");
  circle.forEach(function (progress) {
    let degree = 0;
    var targetDegree = parseInt(progress.getAttribute("data-degree"));
    let color = progress.getAttribute("data-color");
    let number = progress.querySelector(".h4s3");

    var interval = setInterval(function () {
      degree += 1;
      if (degree > targetDegree) {
        clearInterval(interval);
        return;
      }
      progress.style.background = `conic-gradient(${color} ${degree}%, #fff 0%)`;
      number.innerHTML = degree + "<span>%</span>";
    }, 50);
  });
});
