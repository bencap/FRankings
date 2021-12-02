const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    id: String,
    name: String,
    team: String,
    position: String,
    avgPts: Number,
    fGrade: Number,
    oGrade: Number,
  },
  {
    collection: 'players_all'
  }
);

const Player = mongoose.model('Player', playerSchema);

module.exports = Player ;