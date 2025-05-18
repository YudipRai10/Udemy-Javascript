const express = require("express");

const router = express.Router();

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res) => {
  locationStorage.locations.push({
    id: Math.random(),
    address: req.body.address,
    coords: {
      lat: req.body.lat,
      lng: req.body.lng,
    },
  });

  res.json({ message: "Stored Location!" });
});

module.exports = router;
