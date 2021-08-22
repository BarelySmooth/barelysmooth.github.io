function closeIntro() {
    const introElement = document.getElementById("intro");
    const introElementText = document.getElementsByClassName("introText");
    const introElementHR = document.getElementById("intro-hr");
    const introCloseButton = document.getElementById("close_intro_button");
    introElementText[0].style["display"] = "none";
    introElementText[1].style["display"] = "none";
    introElementText[2].style["display"] = "none";
    introElementHR.style["display"] = "none";
    introCloseButton.style["display"] = "none";
}

document.addEventListener('scroll', function() {
    lastKnownScrollPosition = window.scrollY;
  
    if (window.scrollY < document.getElementById("intro").offsetHeight - 200){
        document.getElementById("intro-back").classList.add("intro-back-normal");
        document.getElementById("intro-back").classList.remove("intro-back-line");
    } else {
        document.getElementById("intro-back").classList.add("intro-back-line");
        document.getElementById("intro-back").classList.remove("intro-back-normal");
    }

  });