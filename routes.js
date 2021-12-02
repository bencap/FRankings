const express = require('express');
const router = express.Router();
const playerService = require('./player.service');

router.get('/players', (req, res) => {
    playerService.getPlayers(req, res);
});
router.get('/players/:position', (req, res) => {
    playerService.getPlayersByPosition(req, res);
});

module.exports = router;