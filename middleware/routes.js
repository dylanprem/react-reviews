const getRoutes = require("../routes/api/get");
const postRoutes = require("../routes/api/post");
const deleteRoutes = require("../routes/api/delete");

function initRoutes(app) {
  // routes
  app.use("/api/get", getRoutes);
  app.use("/api/post", postRoutes);
  app.use("/api/delete", deleteRoutes);
}

module.exports = { initRoutes };
