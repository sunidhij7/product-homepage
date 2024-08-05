const accordion = document.querySelectorAll(".accordian--trigger");
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      for (let j = 0; j < accordion.length; j++) {
        if (accordion[j] !== this) {
          accordion[j].classList.remove("active");
          accordion[j].parentElement.classList.remove("open-tab");
          accordion[j].nextElementSibling.style.display = "none";
        }
      }

      this.classList.toggle("active"); //using this line to track state (for ease of styling)

      if (this.classList.contains("active")) {
        this.parentElement.classList.add("open-tab");
      } else {
        this.parentElement.classList.remove("open-tab");
      }

      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // open all
  const openAllBtn = document.querySelector(".open-all-button");
  openAllBtn.addEventListener("click",() =>{
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.add("active");
      accordion[i].parentElement.classList.add("open-tab");
      accordion[i].nextElementSibling.style.display = "block";
  }
  });

  //close all
  const closeAllBtn = document.querySelector(".close-all-button");
  closeAllBtn.addEventListener("click",() =>{
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove("active");
      accordion[i].parentElement.classList.remove("open-tab");
      accordion[i].nextElementSibling.style.display = "none";
  }
  });
