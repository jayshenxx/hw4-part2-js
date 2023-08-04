let projectName = "placeholder";
let img = "https://source.unsplash.com/random/?software";
let description = "hello";
let link = "https://www.google.com/chrome";

let html = `
    <style>
        .card {
            background-color: #FFF;
            border: 1px solid var(--border-color);
            margin: 20px;
            text-align: center;
        }
        .card img {
            margin-top:20px;
            width: 100%;
        }
        .card h2, .card p {
            margin: 15px;
        }
        .card a {
            display: block;
            margin: 15px;
        }
        .btn {
            color:white;
            border: none;
        }
        .btn:hover {
            cursor:pointer;
        }
        .btn-edit {
            background-color: var(--blue-color);
        }
        .btn-delete {
            background-color: var(--red-color);
        }
        button {
            padding: 5px 10px;
        }
    </style>

    <div class="card">
        <h2>${projectName}</h2>
        <button class="btn btn-edit" id="editProject">Edit</button>
        <button class="btn btn-delete" id="deleteProject">Delete</button>
        <img src="${img}" alt="Project Image">
        <p>${description}</p>
        <a target="_blank" href="${link}">Read More</a>
    </div>
` 

class projectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = html;
    }

    static get observedAttributes() {
        return ['project-name','project-img','project-description','project-link'];
    }


    attributeChangedCallback(value, oldValue, newValue) {

        console.log(value);

        if (value === 'project-name') {
          this.updateName(newValue);
        } 

        else if (value === 'project-img') {
            this.updateImg(newValue);
        }

        else if(value === 'project-description') {
            this.updateDescription(newValue);
        }

        else {
            this.updateLink(newValue);
        }
    }

    updateName(value) {
        let h2 = this.shadowRoot.querySelector('h2');
        h2.textContent = value;
    }

    updateImg(value) {
        let img = this.shadowRoot.querySelector('img');
        img.src = value;
    }

    updateDescription(value) {
        let description = this.shadowRoot.querySelector('p');
        description.textContent = value;
    }

    updateLink(value) {
        let link = this.shadowRoot.querySelector('a');
        link.href = value;
    }
}

window.customElements.define("project-card", projectCard);
