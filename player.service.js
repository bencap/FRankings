const Player = require('./player.model');
const QB = require('./qb.model');
const RB = require('./rb.model');
const WR = require('./wr.model');
const TE = require('./te.model');
const DEF = require('./def.model');

require('./mongo').connect();

function getPlayers(req, res) {
    const docquery = Player.find();
    docquery
        .exec()
        .then(rankings => {
            res.status(200).json(rankings);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function getPlayersByPosition(req, res) {
    var pos = req.params.position.toUpperCase();

    if (pos == "QB"){
        const docquery = QB.find({ position: req.params.position.toUpperCase() })
        docquery
            .exec()
            .then(players_qb => {
                res.status(200).json(players_qb);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    else if (pos == "RB"){
        const docquery = RB.find({ position: req.params.position.toUpperCase() })
        docquery
            .exec()
            .then(players_rb => {
                res.status(200).json(players_rb);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    else if (pos == "WR"){
        const docquery = WR.find({ position: req.params.position.toUpperCase() })
        docquery
            .exec()
            .then(players_wr => {
                res.status(200).json(players_wr);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    else if (pos == "TE"){
        const docquery = TE.find({ position: req.params.position.toUpperCase() })
        docquery
            .exec()
            .then(players_te => {
                res.status(200).json(players_te);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    else if (pos == "DEF"){
        const docquery = DEF.find({ position: req.params.position.toUpperCase() })
        docquery
            .exec()
            .then(players_def => {
                res.status(200).json(players_def);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    else{
        const docquery = Player.find({ position: req.params.position.toUpperCase() })
        docquery
            .exec()
            .then(players_prod => {
                res.status(200).json(players_prod);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
}

module.exports = {
    getPlayers,
    getPlayersByPosition,
};