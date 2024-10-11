console.log("SCRIPT.JS")

const mysql = require(["mysql"]);
import { createRequire } from 'mysql';
const require = createRequire(import.meta.url);

// const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "mysql",
    password: "root",
    database: "books",
});


function getAll() {
    connection.query("SELECT * FROM bookinfo", (err, rows) => {
        if (err) {
            console.error("Error executing query:", err);
            return;
        }
        console.log("Retrieved data:", rows);
        return rows;
    });
}

function addToDatabase(name, author, image, price, contact ) {
    connection.query(`INSERT INTO bookinfo VALUES(${name}, ${author}, ${image}, ${price}, ${contact})`, (err, rows) => {
        if (err) {
            console.error("Error executing query:", err);
            return;
        }
        console.log("Retrieved data:", rows);
        return rows;
    });
}

const newRecord = { name: 'John Doe', email: 'john@example.com' };
connection.query('INSERT INTO your_table_name SET ?', newRecord, (err, result) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Inserted record ID:', result.insertId);
});

connection.end((err) => {
    if (err) {
      console.error('Error closing connection:', err);
      return;
    }
    console.log('Connection closed');
  });
