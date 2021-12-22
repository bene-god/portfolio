// const { TableBody } = require("@material-ui/core");

`use strict`;

// navigation menu

document.addEventListener(`DOMContentLoaded`, () => {
  const nav = document.querySelector(`.nav-menu`);
  const toggleNav = document.querySelector(`.hamburger-btn`);
  const closeBtn = document.querySelector(`.close-nav-menu`);

  const showMenu = function () {
    nav.classList.add(`showNavMenu`);
    nav.classList.remove(`hide`);
    toggleNav.classList.remove(`hide`);
  };

  const closeMenu = function () {
    nav.classList.remove(`showNavMenu`);
    toggleNav.classList.remove(`hide`);
  };

  toggleNav.addEventListener(`click`, showMenu);

  closeBtn.addEventListener(`click`, closeMenu);

  // close menu

  const cancel = document.querySelectorAll(`#cancelMenu`);

  const linkCancel = function () {
    nav.classList.remove(`showNavMenu`);
    nav.classList.add(`hide`);
    toggleNav.classList.remove(`hide`);
  };
  for (let i = 0; i < cancel.length; i++) {
    cancel[i].addEventListener(`click`, linkCancel);
  }
});

// ADD AND REMOVE ACTIVE CLASS BASED ON URL

const currentLocation = location.href;
const menuItem = document.querySelectorAll(`a`);
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList = `active`;
  }
}

// *********************************
// about section tabs**************************************

// () => {

document.addEventListener(`DOMContentLoaded`, () => {
  // () => {
  const aboutSection = document.querySelector(`.about-section`);
  tabsContainer = document.querySelector(`.about-tabs`);
  tabsContainer.addEventListener(`click`, (event) => {
    console.log(event.target);

    // if event.target contains
    if (
      event.target.classList.contains(`tab-item`) &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute(`data-target`);
      //     deactivate existing active 'tab-item
      tabsContainer
        .querySelector(`.active`)
        .classList.remove(`outer-shadow`, `active`);
      //   activiate new 'tab-item'
      event.target.classList.add(`active`, `outer-shadow`);
      // deactivate existing active `tab-content
      aboutSection
        .querySelector(`.tab-content.active `)
        .classList.remove(`active`);
      //   activate new `tab-content`
      aboutSection.querySelector(target).classList.add(`active`);
    }
  });
  // };
});

// portfolio filter and popup

// () => {
const filterContainer = document.querySelector(`.portfolio-filter`);
const portfolioItemsContainer = document.querySelector(`portfolio-items`);
portfolioItems = document.querySelectorAll(`.portfolio-item`);
// popup = document.querySelector(`.portfolio-popup`);
// prevBtn = popup.querySelector(`.pp-prev`);
// nextBtn = popup.querySelector(`.pp-next`);
// closeBtn = popup.querySelector(`.pp-close`);
// projectDetailsContainer = popup.querySelector(`.pp-details`);
// projectDetailsBtn = popup.querySelector(`.pp-project-details-btn`);
// let itemIndex, slideIndex, screenshots;

// filter portfolio items
filterContainer.addEventListener(`click`, (event) => {
  if (
    event.target.classList.contains(`filter-item`) &&
    !event.target.classList.contains(`active`)
  ) {
    // deactivate existing active 'filter-item'
    filterContainer
      .querySelector(`.active`)
      .classList.remove(`outer-shadow`, `active`);
    // activate new `filter item
    event.target.classList.add(`active`, `outer-shadow`);
    const target = event.target.getAttribute(`data-target`);
    portfolioItems.forEach((item) => {
      if (target === item.getAttribute(`data-category`) || target === `all`) {
        item.classList.remove(`hide`);
        item.classList.add(`show`);
      } else {
        item.classList.remove(`show`);
        item.classList.add(`hide`);
      }
    });
  }
});

// popup slider

// PROJECT ONE SLIDER
function projectOneSlider() {
  const slides = document.querySelector(".slider-items").children;
  const nextSlide = document.querySelector(".right-slide");
  var prevSlide = document.querySelector(".left-slide");
  var totalSlides = slides.length;
  var indexNumber = 0;

  nextSlide.onclick = function () {
    next("next");
  };
  prevSlide.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber++;
      if (indexNumber == totalSlides) {
        indexNumber = 0;
      }
    } else {
      if (indexNumber == 0) {
        indexNumber = totalSlides - 1;
      } else {
        indexNumber--;
      }
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[indexNumber].classList.add("active");
  }
}

// PROJECT TWO SLIDER
function projectTwoSlider() {
  const slidesTwo = document.querySelector(".slider-items2").children;
  const nextSlideTwo = document.querySelector(".right-slide2");
  var prevSlideTwo = document.querySelector(".left-slide2");
  var totalSlides2 = slidesTwo.length;
  var indexNumber2 = 0;

  nextSlideTwo.onclick = function () {
    next("next");
  };
  prevSlideTwo.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber2++;
      if (indexNumber2 == totalSlides2) {
        indexNumber2 = 0;
      }
    } else {
      if (indexNumber2 == 0) {
        indexNumber2 = totalSlides2 - 1;
      } else {
        indexNumber2--;
      }
    }

    for (i = 0; i < slidesTwo.length; i++) {
      slidesTwo[i].classList.remove("active");
    }
    slidesTwo[indexNumber2].classList.add("active");
  }
}

// PROJECT THREE SLIDER
function projectThreeSliders() {
  const slidesThree = document.querySelector(".slider-items3").children;
  const nextSlide3 = document.querySelector(".right-slide3");
  var prevSlide3 = document.querySelector(".left-slide3");
  var totalSlides3 = slidesThree.length;
  var indexNumber3 = 0;

  nextSlide3.onclick = function () {
    next("next");
  };
  prevSlide3.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber3++;
      if (indexNumber3 == totalSlides3) {
        indexNumber3 = 0;
      }
    } else {
      if (indexNumber3 == 0) {
        indexNumber3 = totalSlides3 - 1;
      } else {
        indexNumber3--;
      }
    }

    for (i = 0; i < slidesThree.length; i++) {
      slidesThree[i].classList.remove("active");
    }
    slidesThree[indexNumber3].classList.add("active");
  }
}

// PROJECT FOUR SLIDER
function projectfourSliders() {
  const slidesFour = document.querySelector(".slider-items4").children;
  const nextSlide4 = document.querySelector(".right-slide4");
  var prevSlide4 = document.querySelector(".left-slide4");
  var totalSlides4 = slidesFour.length;
  var indexNumber4 = 0;

  nextSlide4.onclick = function () {
    next("next");
  };
  prevSlide4.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber4++;
      if (indexNumber4 == totalSlides4) {
        indexNumber4 = 0;
      }
    } else {
      if (indexNumber4 == 0) {
        indexNumber4 = totalSlides4 - 1;
      } else {
        indexNumber4--;
      }
    }

    for (i = 0; i < slidesFour.length; i++) {
      slidesFour[i].classList.remove("active");
    }
    slidesFour[indexNumber4].classList.add("active");
  }
}

// PROJECT FIVE SLIDER
function projectFiveSliders() {
  const slidesFive = document.querySelector(".slider-items5").children;
  const nextSlide5 = document.querySelector(".right-slide5");
  var prevSlide5 = document.querySelector(".left-slide5");
  var totalSlides5 = slidesFive.length;
  var indexNumber5 = 0;

  nextSlide5.onclick = function () {
    next("next");
  };
  prevSlide5.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber5++;
      if (indexNumber5 == totalSlides5) {
        indexNumber5 = 0;
      }
    } else {
      if (indexNumber5 == 0) {
        indexNumber5 = totalSlides5 - 1;
      } else {
        indexNumber5--;
      }
    }

    for (i = 0; i < slidesFive.length; i++) {
      slidesFive[i].classList.remove("active");
    }
    slidesFive[indexNumber5].classList.add("active");
  }
}

// PROJECT SIX SLIDER
function projectSixSliders() {
  const slidesSix = document.querySelector(".slider-items6").children;
  const nextSlide6 = document.querySelector(".right-slide6");
  var prevSlide6 = document.querySelector(".left-slide6");
  var totalSlides6 = slidesSix.length;
  var indexNumber6 = 0;

  nextSlide6.onclick = function () {
    next("next");
  };
  prevSlide6.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber6++;
      if (indexNumber6 == totalSlides6) {
        indexNumber6 = 0;
      }
    } else {
      if (indexNumber6 == 0) {
        indexNumber6 = totalSlides6 - 1;
      } else {
        indexNumber6--;
      }
    }

    for (i = 0; i < slidesSix.length; i++) {
      slidesSix[i].classList.remove("active");
    }
    slidesSix[indexNumber6].classList.add("active");
  }
}

// PROJECT SEVEN SLIDER
function projectSevenSliders() {
  const slidesSeven = document.querySelector(".slider-items7").children;
  const nextSlide7 = document.querySelector(".right-slide7");
  var prevSlide7 = document.querySelector(".left-slide7");
  var totalSlides7 = slidesSeven.length;
  var indexNumber7 = 0;

  nextSlide7.onclick = function () {
    next("next");
  };
  prevSlide7.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      indexNumber7++;
      if (indexNumber7 == totalSlides7) {
        indexNumber7 = 0;
      }
    } else {
      if (indexNumber7 == 0) {
        indexNumber7 = totalSlides7 - 1;
      } else {
        indexNumber7--;
      }
    }

    for (i = 0; i < slidesSeven.length; i++) {
      slidesSeven[i].classList.remove("active");
    }
    slidesSeven[indexNumber7].classList.add("active");
  }
}
// popup js end

// TESTIMONIALS START

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName(`testimonials`);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = `none`;
  }

  slides[slideIndex - 1].style.display = `block`;
  slides[slideIndex - 1].className += `active`;
}

// testimonials end

//  hide all sections except active

const sections = document.querySelectorAll(`.section`);

// console.log(sections);
const hideShowSections = function () {
  if (sections.classList.contains(`hide`)) {
    sections.classList.remove(`hide`);
    sections.classList.add(`show-section`);
  }
};

// const hideShowSections = function () {
//   if (
//     sections.classList.contains(`hide`) &&
//     !sections.classList.contains(`show-section`)
//   ) {
//     // remove show-section from indisplay
//     sections.querySelector(`.show-section`).classList.remove(`show-section`);

//     // add show-section to new section
//     sections.classList.add(`show-section`);
//   }
// };

// sections.forEach((section) => {
//   if (!section.classList.contains(`show-section`)) {
//     section.classList.add(`hide`);
//   } else {
//     for (let x = 0; x < sections.length; x++) {
//       sections[x].addEventListener(`click`, hideShowSections);
//     }
//   }
// });

// MY OWN POPUP JAVASCRIPT
// POPUPBTN DECLARATIONS
const popupBtn = document.querySelector(`#popup-btn`);
const popupBtn2 = document.querySelector(`#popup-btn2`);
const popupBtn3 = document.querySelector(`#popup-btn3`);
const popupBtn4 = document.querySelector(`#popup-btn4`);
const popupBtn5 = document.querySelector(`#popup-btn5`);
const popupBtn6 = document.querySelector(`#popup-btn6`);
const popupBtn7 = document.querySelector(`#popup-btn7`);

// POPUPBTN DETAILS DECLARATIONS
const details = document.querySelector(`.pp-details`);
const details2 = document.querySelector(`.pp-details2`);
const details3 = document.querySelector(`.pp-details3`);
const details4 = document.querySelector(`.pp-details4`);
const details5 = document.querySelector(`.pp-details5`);
const details6 = document.querySelector(`.pp-details6`);
const details7 = document.querySelector(`.pp-details7`);
// const portfolioScreenshots = document.querySelector(`.pp-main-inner`);
// const popupToggle = document.querySelector(`.portfolio-popup`);

const closePopupbtn = document.querySelector(`.pp-close`);
const closePopupbtn2 = document.querySelector(`.pp-close-2`);
const closePopupbtn3 = document.querySelector(`.pp-close-3`);
const closePopupbtn4 = document.querySelector(`.pp-close-4`);
const closePopupbtn5 = document.querySelector(`.pp-close-5`);
const closePopupbtn6 = document.querySelector(`.pp-close-6`);
const closePopupbtn7 = document.querySelector(`.pp-close-7`);

const projectOne = document.querySelector(`.project-1`);
const projectTwo = document.querySelector(`.project-2`);
const projectThree = document.querySelector(`.project-3`);
const projectFour = document.querySelector(`.project-4`);
const projectFive = document.querySelector(`.project-5`);
const projectSix = document.querySelector(`.project-6`);
const projectSeven = document.querySelector(`.project-7`);

const openProjectOnebtn = document.querySelector(`.view-projectOne`);
const openProjectTwobtn = document.querySelector(`.view-projectTwo`);
const openProjectThreebtn = document.querySelector(`.view-projectThree`);
const openProjectFourbtn = document.querySelector(`.view-projectFour`);
const openProjectFivebtn = document.querySelector(`.view-projectFive`);
const openProjectSixbtn = document.querySelector(`.view-projectSix`);
const openProjectSevenbtn = document.querySelector(`.view-projectSeven`);

// OPEN projectOne POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectDetails() {
  popupBtn.addEventListener(`click`, function () {
    console.log(`project one details closed`);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
      console.log(`project one details opened`);
    }
  });
}

// OPEN projectOne POPUP DETAILS BUTTON END

// OPEN projectTwo POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectTwoDetails() {
  popupBtn2.addEventListener(`click`, function () {
    // details.style.display = `none`;
    console.log(`project one details closed`);
    if (details2.style.display === "block") {
      details2.style.display = "none";
    } else {
      details2.style.display = "block";
      console.log(`project one details opened`);
    }
  });
}

// OPEN projectTwo POPUP DETAILS BUTTON END

// OPEN projectThree POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectThreeDetails() {
  popupBtn3.addEventListener(`click`, function () {
    // details.style.display = `none`;
    console.log(`project Two details closed`);
    if (details3.style.display === "block") {
      details3.style.display = "none";
    } else {
      details3.style.display = "block";
      console.log(`project Two details opened`);
    }
  });
}

// OPEN projectThree POPUP DETAILS BUTTON END

// OPEN projectFour POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectFourDetails() {
  popupBtn4.addEventListener(`click`, function () {
    // details.style.display = `none`;
    console.log(`project Four details closed`);
    if (details4.style.display === "block") {
      details4.style.display = "none";
    } else {
      details4.style.display = "block";
      console.log(`project Four details opened`);
    }
  });
}

// OPEN projectFour POPUP DETAILS BUTTON END

// OPEN projectFive POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectFiveDetails() {
  popupBtn5.addEventListener(`click`, function () {
    // details.style.display = `none`;
    console.log(`project Five details closed`);
    if (details5.style.display === "block") {
      details5.style.display = "none";
    } else {
      details5.style.display = "block";
      console.log(`project Five details opened`);
    }
  });
}

// OPEN projectFive POPUP DETAILS BUTTON END

// OPEN projectThree POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectSixDetails() {
  popupBtn6.addEventListener(`click`, function () {
    // details.style.display = `none`;
    console.log(`project Six details closed`);
    if (details6.style.display === "block") {
      details6.style.display = "none";
    } else {
      details6.style.display = "block";
      console.log(`project Six details opened`);
    }
  });
}

// OPEN projectSix POPUP DETAILS BUTTON END

// OPEN projectSeven POPUP DETAILS BUTTON START
// for (let i = 0; i < popupBtn.length; i++) {

function openProjectSevenDetails() {
  popupBtn7.addEventListener(`click`, function () {
    // details.style.display = `none`;
    console.log(`project Two details closed`);
    if (details7.style.display === "block") {
      details7.style.display = "none";
    } else {
      details7.style.display = "block";
      console.log(`project Seven details opened`);
    }
  });
}

// OPEN projectSeven POPUP DETAILS BUTTON END

function removeOverflowFromBody() {
  const popupBody = document.querySelector(`body`);
  console.log(`removed overflow`);
  popupBody.style.overflow = `hidden`;
}

function addOverflowFromBody() {
  const popupBody = document.querySelector(`body`);
  console.log(`added overflow`);
  popupBody.style.overflow = `scroll`;
}

//CLOSE POPUP ONE DIV
closePopupbtn.addEventListener(`click`, function () {
  if (projectOne.classList.contains === `open`) {
  } else {
    projectOne.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP TWO DIV
closePopupbtn2.addEventListener(`click`, function () {
  if (projectTwo.classList.contains === `open`) {
  } else {
    projectTwo.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP THREE DIV
closePopupbtn3.addEventListener(`click`, function () {
  if (projectThree.classList.contains === `open`) {
  } else {
    projectThree.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP FOUR DIV
closePopupbtn4.addEventListener(`click`, function () {
  if (projectFour.classList.contains === `open`) {
  } else {
    projectFour.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP FIVE DIV
closePopupbtn5.addEventListener(`click`, function () {
  if (projectFive.classList.contains === `open`) {
  } else {
    projectFive.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP SIX DIV
closePopupbtn6.addEventListener(`click`, function () {
  if (projectSix.classList.contains == `open`) {
  } else {
    projectSix.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP SEVEN DIV
closePopupbtn7.addEventListener(`click`, function () {
  if (projectSeven.classList.contains === `open`) {
  } else {
    projectSeven.classList.remove(`open`);
    console.log(`closed div`);
    addOverflowFromBody();
  }
});

//CLOSE POPUP EIGHT DIV
// closePopupbtn8.addEventListener(`click`, function () {
//   if (projectEight.classList.contains === `open`) {
//   } else {
//     projectEight.classList.remove(`open`);
//     console.log(`closed div`);
//     addOverflowFromBody();
//   }
// });

// }

// OPEN PROJECT ONE
openProjectOnebtn.addEventListener(`click`, function () {
  console.log(`hello`);
  projectOne.classList.add(`open`);
  removeOverflowFromBody();
  projectOneSlider();
  openProjectDetails();
});

// OPEN PROJECT TWO
openProjectTwobtn.addEventListener(`click`, function () {
  console.log(`project-two`);
  projectTwo.classList.add(`open`);
  removeOverflowFromBody();
  projectTwoSlider();
  openProjectTwoDetails();
});

// OPEN PROJECT THREE
openProjectThreebtn.addEventListener(`click`, function () {
  console.log(`project-three`);
  projectThree.classList.add(`open`);
  removeOverflowFromBody();
  projectThreeSliders();
  openProjectThreeDetails();
});

// OPEN PROJECT FOUR
openProjectFourbtn.addEventListener(`click`, function () {
  console.log(`project-four`);
  projectFour.classList.add(`open`);
  removeOverflowFromBody();
  projectfourSliders();
  openProjectFourDetails();
});

// OPEN PROJECT FIVE
openProjectFivebtn.addEventListener(`click`, function () {
  console.log(`project-five`);
  projectFive.classList.add(`open`);
  removeOverflowFromBody();
  projectFiveSliders();
  openProjectFiveDetails();
});

// OPEN PROJECT SIX
openProjectSixbtn.addEventListener(`click`, function () {
  console.log(`project-six`);
  projectSix.classList.add(`open`);
  removeOverflowFromBody();
  projectSixSliders();
  openProjectSixDetails();
});

// OPEN PROJECT SEVEN
openProjectSevenbtn.addEventListener(`click`, function () {
  console.log(`project-seven`);
  projectSeven.classList.add(`open`);
  removeOverflowFromBody();
  projectSevenSliders();
  openProjectSevenDetails();
});

// CONTACT ME CODE

// OPEN PROJECT EIGHT
// openProjectEightbtn.addEventListener(`click`, function () {
//   console.log(`project-Eight`);
//   projectEight.classList.add(`open`);
//   removeOverflowFromBody();
// });
