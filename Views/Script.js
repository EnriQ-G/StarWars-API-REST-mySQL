const HTMLResponse = document.querySelector("#container");

async function getCharacter() {
    const personajeId = document.getElementById("input_character_name").value;
    const url = `http://localhost:4000/api/starwars/${personajeId}`;
    const HTMLResponse = document.getElementById("container");

    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.length > 0) {
            const personaje = data[0];
            const html = `<p>
                    <span><img src="https://starwars-visualguide.com/assets/img/characters/${personaje.id}.jpg" alt="Image of ${personaje.name}"></span><br />
                    <span>Nombre: ${personaje.name}</span><br />
                    <span>Género: ${personaje.gender}</span><br />
                    <span>Altura: ${personaje.height} metros</span><br />
                    <span>Color de ojos: ${personaje.eye_color}</span><br />
                    <span>Año de Nacimiento: ${personaje.birth_year}</span><br />
                    <span>Peso: ${personaje.mass} kilos </span><br />
                    <span>Planeta de Origen: ${personaje.planet_id}</span><br />
                </p>`;
            HTMLResponse.innerHTML = html;
        } else {
            console.log('No character found.');
        }
    } catch (error) {
        console.error(error);
    }
}

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

//Modifica la función fetchData para que muestre los datos de la API en la página web

function fetchData() {
    const ul = document.createElement("ul");

    fetch("http://localhost:4000/api/starwars/")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const li = document.createElement("li");
                li.innerHTML =
                    `<p>
                <span><img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg" alt="Image of ${element.name}"></span><br />
                <span>Nombre: ${element.name}</span><br />
                <span>Género: ${element.gender}</span><br />
                <span>Altura: ${element.height} metros</span><br />
                <span>Color de ojos: ${element.eye_color}</span><br />
                <span>Año de Nacimiento: ${element.birth_year}</span><br />
                <span>Peso: ${element.mass} kilos </span><br />
                <span>Planeta de Origen: ${element.homeworld}</span><br />
                <span>Especie: ${element.species}</span><br />
                </p>`;
                ul.appendChild(li);
            });
            HTMLResponse.innerHTML = "";
            HTMLResponse.appendChild(ul);
        })
        .catch(error => {
            console.error(error);
        });
}
/*
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", function () {
    fetchData();
    search_character_button_click()
});*/