const pg = require("pg");
const settings = require("./settings"); // settings.json
const output = require("./result");
let person = process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name LIKE '%' || $1 || '%' OR last_name LIKE '%' || $1 || '%'", [person], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    output(result);

    client.end();
  });
});

