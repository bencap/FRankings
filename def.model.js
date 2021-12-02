const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DEFSchema = new Schema(
    {
      id: String,
      name: String,
      position: String,
      team: String,
      avgPts: Number,
      fGrade: Number,
      oGrade: Number,
      fto: Number,
      pointsAllowedGame: Number,
      yardsAllowedGame: Number,
      specialTeamsTDs: Number,
    },
    {
      collection: 'players_def'
    }
  );

  const DEF = mongoose.model('DEF', DEFSchema);

  module.exports = DEF ;