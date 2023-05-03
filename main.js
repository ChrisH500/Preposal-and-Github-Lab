const projectList = document.getElementById("projects");
const notesSection = document.getElementById("notes");
const projectInput = document.getElementById("project-input");
const addProjectButton = document.getElementById("add-project-btn");
const projectTitle = document.getElementById("project-title");

let projects = [];

addProjectButton.addEventListener("click", addProject);

function addProject() {
  const projectName = projectInput.value;
  if (projectName !== "") {
    const project = {
      name: projectName,
      notes: []
    };
    projects.push(project);
    renderProjects();
    projectInput.value = "";
  }
}

function renderProjects() {
  projectList.innerHTML = "";
  projects.forEach((project, index) => {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.name;
    projectItem.addEventListener("click", () => {
      renderNotes(index);
      projectTitle.textContent = project.name;
    });
    projectList.appendChild(projectItem);
  });
}

function renderNotes(projectIndex) {
  notesSection.innerHTML = "";
  const project = projects[projectIndex];
  project.notes.forEach(note => {
    const noteItem = document.createElement("p");
    noteItem.textContent = note;
    notesSection.appendChild(noteItem);
  });
}

renderProjects();
