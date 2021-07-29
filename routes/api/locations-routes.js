const router = require('express').Router();
const { Location, Trips, Traveller } = require('../../models');

// The `/api/locations` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Location data
  try {
    const locationData = await Location.findAll({
      include: [{model: Location}],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Location data
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{model: Traveller}],
    });

    if (!locationData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new Location
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a Location's name by its `id` value
  try {
    const locationData = await Location.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!locationData) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on Location by its `id` value
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return
    };

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
