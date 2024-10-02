// Dynamically add coding projects
const LIST_OF_CODING_PROJECTS = [
  {
    name: "Todo",
    description: "A simple todo list app built with React.js",
    imageURL: "./images/todoapp-project-img.png",
    links: {
      github: "https://github.com/BarelySmooth/react-todo",
      website: "https://barelysmooth.dev/react-todo",
    },
    languages: ["React.js", "HTML", "CSS"],
    development_status: "In Development",
  },
  {
    name: "barelysmooth.dev",
    description: "My personal portfolio website",
    imageURL: "./images/source_code_thumbnail.png",
    links: {
      github: "https://github.com/BarelySmooth/barelysmooth.github.io",
      website: "https://barelysmooth.dev/",
    },
    languages: ["HTML", "CSS", "JS"],
    development_status: "Actively Maintained",
  },
  {
    name: "Rebot",
    description: "A discord bot to manage message reports in a server",
    imageURL: "./images/rebot-project-img.png",
    links: {
      github: "https://github.com/BarelySmooth/rebot",
      website: null,
    },
    languages: ["Discord.js", "JS"],
    development_status: "Unmaintained",
  },
];

const codingprojects_container_div = document.querySelector(
  "#coding-projects-container"
);
const coding_projects_list = document.createElement("ul");
coding_projects_list.id = "coding_projects_list";
codingprojects_container_div.appendChild(coding_projects_list);

// PS: the below regex is to remove whitespace
for (project of LIST_OF_CODING_PROJECTS) {
  const projectElement = document.createElement("li");
  projectElement.classList.add("coding_project");
  projectElement.innerHTML = `
  <img src="${project.imageURL}" alt="Representative image of project: ${
    project.name
  }" class="project-image">
  <div class="coding-project-details">
      <div class="title-and-status-container">
        <h3>${project.name}</h3>
        <p class="development-status pill ${project.development_status
          .toLowerCase()
          .replace(/\s+/g, "-")}-pill">${project.development_status}</p>
      </div>
      <p>${project.description}</p>
  </div>
  <div class="project-links">
      <a href="${project.links.github}" class="project-link">
        <img src="./images/githubicon.svg" alt="github repository" />
      </a>
      ${
        project.links.website
          ? `<a href="${project.links.website}" class="project-link">
                <img src="./images/linkicon.svg" alt="github repository" />
            </a>`
          : ""
      }
  </div>
  `;
  document.getElementById("coding_projects_list").appendChild(projectElement);
}

// Dynamically add scratch projects
const LIST_OF_SCRATCH_PROJECTS = [
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

const scratch_projects_container_div = document.querySelector(
  "#scratch-projects-container"
);
const scratch_projects_list = document.createElement("ul");
scratch_projects_list.id = "scratch_projects_list";
scratch_projects_container_div.appendChild(scratch_projects_list);

for (project of LIST_OF_SCRATCH_PROJECTS) {
  const projectElement = document.createElement("li");
  projectElement.classList.add("scratch_project");
  projectElement.innerHTML = `<a href="https://scratch.mit.edu/projects/${project.id}/"><div class="projectImageContainer"><img src="https://uploads.scratch.mit.edu/projects/thumbnails/${project.id}.png" alt="Thumbnail of the project '${project.title}'"></div></a>
            <a href="https://scratch.mit.edu/projects/${project.id}/" class="projectLink">${project.title}</a>`;
  document.getElementById("scratch_projects_list").appendChild(projectElement);
}
