const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "whereinworld",
	password: "abc123",
	database: "world"
};
const pool = new Pool(config)

app.get("/api/info", async (req, res) => {
    try {
            const template = "SELECT DISTINCT city.name, country.name as poop, city.countrycode, country.region, countrylanguage.language from city join country on (city.countrycode = country.code) join countrylanguage on (country.code = countrylanguage.countrycode) where city.name ilike '%'||$1||'%' ORDER BY city.name limit 20";
            const response = await pool.query(template, [
                    req.query.q
            ]);
            res.json(response.rows);
    } catch (err) {
            console.error("Query stupid" + err);
    }
});
app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});