const router = require("express").Router();
const physicianRoutes = require("./physician");

// Book routes
router.use("/physician", physicianRoutes);

module.exports = router;
