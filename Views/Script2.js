// Add event listener to form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

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

    const person = {
        id: id,
        name: name,
        height: height,
        mass: mass,
        hair_color: hair_color,
        skin_color: skin_color,
        eye_color: eye_color,
        birth_year: birth_year,
        gender: gender,
        planet_id: planet_id
    };

    const method = document.getElementById("submitButton").innerText;
    switch (method) {
        case "POST":
            addPerson(person);
            break;
        case "PUT":
            updatePerson(id, person);
            break;
        case "DELETE":
            deletePerson(id);
            break;
    }

    // Reset form fields
    document.getElementById("myForm").reset();
});

// Define a function to add a new person
function addPerson(formData) {
    const url = "http://localhost:4000/api/starwars/";

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        });
}

// Define a function to update an existing person
function updatePerson(id, formData) {
    const url = `http://localhost:4000/api/starwars/${id}`;

    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        });
}

// Define a function to delete an existing person
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