const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TESchema = new Schema(
    {
      id: String,
      name: String,
      team: String,
      position: String,
      avgPts: Number,
      fGrade: Number,
      oGrade: Number,
      totalTDs: Number,
      totalYDs: Number,
      receptions: Number,
      fumbles: Number,
      athleticism: Number,
      agility: Number,
      strength: Number,
      speed: Number,
      productivity: Number,
      catching: Number,
      routeRunning: Number,
      runAfterCatch: Number,
      deepThreat: Number,
      bigPlay: Number,
    },
    {
      collection: 'players_te'
    }
  );
  
  const TE = mongoose.model('TE', TESchema);

  module.exports = TE ;