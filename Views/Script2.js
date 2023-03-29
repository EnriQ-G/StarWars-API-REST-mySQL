// Define a function to add a new person
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

// Define a function to update an existing person
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