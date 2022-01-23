const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const { initRoutes } = require("./middleware/routes");

// routes
initRoutes(app);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
