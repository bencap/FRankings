const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RBSchema = new Schema(
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
      carries: Number,
      receptions: Number,
      fumbles: Number,
      athleticism: Number,
      agility: Number,
      strength: Number,
      speed: Number,
      productivity: Number,
      vision: Number,
      breakTackle: Number,
      ballSecurity: Number,
      catching: Number,
      dualThreat: Number,
      bigPlay: Number,
    },
    {
      collection: 'players_rb'
    }
  );

  const RB = mongoose.model('RB', RBSchema);

  module.exports = RB ;