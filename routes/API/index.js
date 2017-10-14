const router = require("express").Router();
const physicianRoutes = require("./physician");

// Physician routes
router.use("/physician", physicianRoutes);

module.exports = router;
