// I dont want visitors from scratch to see this
// Note: This doesn't work when testing on localhost.
if (document.referrer === "https://scratch.mit.edu") {
  document.getElementsByClassName("rebot")[0].style.display = "none";
}

// TODO: remove this
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

// TODO: remove this
function modifyIntroOnScroll() {
  lastKnownScrollPosition = window.scrollY;

  if (window.scrollY < document.getElementById("intro").offsetHeight - 350) {
    document.getElementById("intro-back").classList.add("intro-back-normal");
    document.getElementById("intro-back").classList.remove("intro-back-line");

    // For container
    document
      .getElementById("intro-back-container")
      .classList.add("intro-back-container-normal");
    document
      .getElementById("intro-back-container")
      .classList.remove("intro-back-container-line");
  } else {
    document.getElementById("intro-back").classList.add("intro-back-line");
    document.getElementById("intro-back").classList.remove("intro-back-normal");

    // For container
    document
      .getElementById("intro-back-container")
      .classList.add("intro-back-container-line");
    document
      .getElementById("intro-back-container")
      .classList.remove("intro-back-container-normal");
  }
}

// Dynamically add projects
const LIST_OF_PROJECTS = [
  {
    id: 556395402,
    title: "Ping OS 4",
  },
  {
    id: 515338430,
    title: "What browser do you use?",
  },
  {
    id: 508473194,
    title: "Gobo Gets Phished (again)",
  },
];

const projects_section = document.querySelector("#scratch-projects-section");
const projects_container = document.createElement("ul");
projects_container.id = "projectsGroup";
projects_section.appendChild(projects_container);

for (project of LIST_OF_PROJECTS) {
  const projectElement = document.createElement("li");
  projectElement.classList.add("project");
  projectElement.innerHTML = `<a href="https://scratch.mit.edu/projects/${project.id}/"><div class="projectImageContainer"><img src="https://uploads.scratch.mit.edu/projects/thumbnails/${project.id}.png" alt="Thumbnail of the project '${project.title}'"></div></a><br>
            <a href="https://scratch.mit.edu/projects/${project.id}/" class="projectLink">${project.title}</a>`;
  document.getElementById("projectsGroup").appendChild(projectElement);
}
