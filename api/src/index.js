const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");
require("dotenv").config({
	path: path.resolve(__dirname, "../.env"),
});

// Force Sync on Model
// const db = require("./models");
// db.sequelize.sync({ alter: true });

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());
app.use(
	cors({
		origin: [process.env.WHITELISTED_DOMAIN && process.env.WHITELISTED_DOMAIN.split(" ")],
	})
);

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (err) {
		console.error("Unable to connect to the database:", error);
	}
};

app.listen(PORT, (req, res) => {
	console.log(`Server started on port: ${PORT}`);
});
