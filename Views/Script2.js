// Define una función para agregar una nueva persona
function addPerson(person) {
    const url = "http://localhost:4000/api/starwars/";

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    })
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        });
}

// Define una función para actualizar una persona existente
function updatePerson(id, person) {
    const url = `http://localhost:4000/api/starwars/${id}`;

    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    })
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        });
}

// Define una función para eliminar una persona existente	
function deletePerson(id) {
    const url = `http://localhost:4000/api/starwars/${id}`;

    return fetch(url, {
        method: "DELETE"
    })
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        });
}

// Agrega un event listener al botón de submit del formulario
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const mass = document.getElementById("mass").value;
    const hair_color = document.getElementById("hair_color").value;
    const skin_color = document.getElementById("skin_color").value;
    const eye_color = document.getElementById("eye_color").value;
    const birth_year = document.getElementById("birth_year").value;
    const gender = document.getElementById("gender").value;
    const planet_id = document.getElementById("planet_id").value;
    const method = document.querySelector('input[name="method"]:checked').value;

    const person = {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        planet_id
    };

    switch (method) {
        case "POST":
            addPerson(person);
            break;
        case "PUT":
            const id = /* get id of person to update */
                updatePerson(id, person);
            break;
        case "DELETE":
            const id = /* get id of person to delete */
                deletePerson(id);
            break;
        default:
            console.error("Invalid method");
            break;
    }
});

// Agrega event listeners a los botones de método
const postBtn = document.getElementById("postButton");
postBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector('input[name="method"][value="POST"]').checked = true;
});

const putBtn = document.getElementById("putButton");
putBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector('input[name="method"][value="PUT"]').checked = true;
});

const deleteBtn = document.getElementById("deleteButton");
deleteBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector('input[name="method"][value="DELETE"]').checked = true;
});