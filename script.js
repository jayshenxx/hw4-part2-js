let button1 = document.getElementById("loadLocal");
let button2 = document.getElementById("loadRemote");

function handleClickLocal() {
    //remove all childs
    let containerElement = document.querySelector('.container');
    containerElement.replaceChildren();
}

function handleClickRemote() {

    //remove all childs
    let containerElement = document.querySelector('.container');
    containerElement.replaceChildren();
    
    //json
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.jsonbin.io/v3/b/64c9be79b89b1e2299c9c036/latest", true);
    xhr.setRequestHeader("X-Master-Key", "$2b$10$nXirEsk3pTDRHBH5gVzFp.f2QNl7eBYQMHLC.HQU/0Ki103A9Vhzy");
    xhr.send();
    xhr.onreadystatechange = () => {

        if (xhr.readyState == XMLHttpRequest.DONE) {
            
            let jsonObject = JSON.parse(xhr.responseText);
            let projects = jsonObject["record"];
    
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
    };
}

button1.addEventListener("click", handleClickLocal);
button2.addEventListener("click", handleClickRemote);
