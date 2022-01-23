const express = require("express");
const { initRoutes } = require("./middleware/routes");
const { initFirebase } = require("./middleware/firebase");
const app = express();
const PORT = process.env.PORT || 8000;

// routes
initRoutes(app);

//firebase
initFirebase();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
