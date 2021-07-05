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
