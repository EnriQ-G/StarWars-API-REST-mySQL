//Esto nos sirve para poder conectar con la base de datos
import { getConnection } from "../database/database";


//Esto nos sirve para poder obtener todos los personajes
const getPeople = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, created_date, updated_date, url FROM base.people");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


//Esto nos sirve para poder obtener un personaje en específico
const getPerson = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, created_date, updated_date, url FROM base.people WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


//Esto nos sirve para poder agregar un personaje
const addPerson = async (req, res) => {
    try {
        const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, url } = req.body;

        if (name === undefined || height === undefined || mass === undefined || hair_color === undefined || skin_color === undefined || eye_color === undefined || birth_year === undefined || gender === undefined || planet_id === undefined || url === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all the fields." })
        }

        const person = { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, url }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO base.people SET ?", person);
        res.json({ message: "Person added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


//Esto nos sirve para poder actualizar un personaje
const updatePerson = async (req, res) => {
    try {
        const { id } = req.params
        const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, url } = req.body;
        if (id === undefined || name === undefined || height === undefined || mass === undefined || hair_color === undefined || skin_color === undefined || eye_color === undefined || birth_year === undefined || gender === undefined || planet_id === undefined || url === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all the fields." })
        }

        const person = { id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, url }
        const connection = await getConnection();
        const result = await connection.query("UPDATE base.people SET ? WHERE id = ?", [person, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


//Esto nos sirve para poder eliminar un personaje
const deletePerson = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM base.people WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


//Esto nos sirve para poder exportar los métodos
export const methods = {
    getPeople,
    getPerson,
    addPerson,
    updatePerson,
    deletePerson
};