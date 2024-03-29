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
    console.log("got here");
    try {
            console.log("got there");
            const template = "SELECT DISTINCT city.name, country.name as poop, city.countrycode, country.region, countrylanguage.language from city join country on (city.countrycode = country.code) join countrylanguage on (country.code = countrylanguage.countrycode) where city.name ilike '%'||$1||'%' ORDER BY city.name limit 20";
            const response = await pool.query(template, [
                    req.query.q
            ]);
            console.log("got over everywhere");
	    if(response.rowCount == 0){
		res.sendStatus(404);
	    }
            res.json(response.rows);
    } catch (err) {
            console.error("Query stupid " + err);
    }
});
app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://34.73.193.139:${app.get("port")}/`);
});
