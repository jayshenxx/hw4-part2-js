let projectsJSON = {
    "1": {
      "name": "Project1 : Dev tools",
      "img": "https://source.unsplash.com/random/?software",
      "description": "HW1 - Exploring the Web Medium and First Steps in Web Development",
      "link": "https://www.google.com/chrome/"
    },
    "2": {
      "name": "Project2 : HTML",
      "img": "https://source.unsplash.com/random/?html5",
      "description": "HW2 - Plan Site and Semantic HTML Execution - Site Build Out Phase 1",
      "link": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements"
    },
    "3": {
      "name": "Project3 : CSS",
      "img": "https://source.unsplash.com/random/?css3",
      "description": "HW3 - Standards Based CSS Responsive Web Design - Site Build Out Phase 2",
      "link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    "4": {
      "name": "Project4 : Javascript,part1",
      "img": "https://source.unsplash.com/random/?json",
      "description": "HW4 Part 1 - DOM Manipulation",
      "link": "https://javascript.info/"
    }
}

localStorage.setItem('data', JSON.stringify(projectsJSON));

let btnLocal = document.getElementById("loadLocal");
btnLocal.addEventListener("click", handleClickLocal);

let btnNewProject = document.getElementById("newProject");
btnNewProject.addEventListener("click", handleNewProject);

function handleClickLocal() {

    document.getElementById("newProject").disabled= false;

    //remove all childs
    let containerElement = document.querySelector('.container');
    containerElement.replaceChildren();

    const data = localStorage.getItem('data');
    const projects = JSON.parse(data);

    for(let key in projects) {
    
      let project = projects[key];
      let name = project["name"];
      let img = project["img"];
      let description = project['description'];
      let link = project['link'];

      console.log(name);

      let e = document.createElement("project-card");
      e.setAttribute('project-name', name);
      e.setAttribute('project-img', img);
      e.setAttribute('project-description', description);
      e.setAttribute('project-link', link);
      let containerElement = document.querySelector('.container');
      containerElement.appendChild(e);
  }

}


function handleNewProject() {

  const newForm = document.getElementById("newForm");
  newForm.innerHTML = `
  <form id="myForm">
    <h1> New Project </h1>
    <label for="name">Project Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="text">Text:</label>
    <input type="text" id="text" name="text" required>
    <br>
    <label for="category">Category:</label>
    <select id="category" name="category" required>
        <option value="general">HTML</option>
        <option value="technical">CSS</option>
        <option value="billing">Javascript</option>
    </select>
    <br>
    <input class="btn btn-new" type="submit" value="Create Project">
  </form>
  `;

  newForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    console.log(formData);

    let e = document.createElement("project-card");
    e.setAttribute('project-name', formData.get("name"));
    e.setAttribute('project-img', img);
    e.setAttribute('project-description', formData.get("text"));
    let containerElement = document.querySelector('.container');
    containerElement.appendChild(e);
  });
}