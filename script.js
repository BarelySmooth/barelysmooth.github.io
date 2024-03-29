
// I dont want visitors from scratch to see this
// Note: This doesn't work when testing on localhost.
if (document.referrer === 'https://scratch.mit.edu') {
    document.getElementsByClassName('rebot')[0].style.display = 'none'
}

function closeIntro() {
    const introElement = document.getElementById("intro");
    const introElementText = document.getElementsByClassName("introText");
    const introElementHR = document.getElementById("intro-hr");
    const introCloseButton = document.getElementById("close_intro_button");
    const introBack = document.getElementById("intro-back");
    const introBackContainer = document.getElementById("intro-back-container");
    introElementText[0].style["display"] = "none";
    introElementText[1].style["display"] = "none";
    introElementText[2].style["display"] = "none";
    introElementHR.style["display"] = "none";
    introCloseButton.style["display"] = "none";
    introBack.style["display"] = "none";
    introBackContainer.style["display"] = "none";
}

function modifyIntroOnScroll() {
    lastKnownScrollPosition = window.scrollY;
  
    if (window.scrollY < document.getElementById("intro").offsetHeight - 350){
        document.getElementById("intro-back").classList.add("intro-back-normal");
        document.getElementById("intro-back").classList.remove("intro-back-line");
        
        // For container
        document.getElementById("intro-back-container").classList.add("intro-back-container-normal");
        document.getElementById("intro-back-container").classList.remove("intro-back-container-line");
    } else {
        document.getElementById("intro-back").classList.add("intro-back-line");
        document.getElementById("intro-back").classList.remove("intro-back-normal");

        // For container
        document.getElementById("intro-back-container").classList.add("intro-back-container-line");
        document.getElementById("intro-back-container").classList.remove("intro-back-container-normal");
    }

}

// document.addEventListener('scroll', modifyIntroOnScroll);

