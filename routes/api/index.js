const router = require('express').Router();
const tripsRoutes = require('./trips-routes');
const locationRoutes = require('./trips-routes');
const travellerRoutes = require('./traveller-routes');

router.use('/trips', tripsRoutes);
router.use('/location', locationRoutes);
router.use('/traveller', travellerRoutes);

module.exports = router;
