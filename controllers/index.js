// Server connection
const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Define the path for the home page
router.use('/', homeRoutes);
// Define the path for the dashboard
router.use('/dashboard', dashboardRoutes);
// Define the path for the server for the API routes
router.use('/api', apiRoutes);

module.exports = router;
