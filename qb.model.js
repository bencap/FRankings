const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QBSchema = new Schema(
    {
      id: String,
      name: String,
      team: String,
      position: String,
      avgPts: Number,
      fGrade: Number,
      oGrade: Number,
      passTDs: Number,
      rushTDs: Number,
      passYDs: Number,
      rushYDs: Number,
      interceptions: Number,
      fumbles: Number,
      athleticism: Number, 
      agility: Number, 
      strength: Number, 
      speed: Number, 
      productivity: Number, 
      armStrength: Number, 
      accuracy: Number, 
      decisionMaking: Number, 
      dualThreat: Number, 
      bigPlay: Number, 
    },
    {
      collection: 'players_qb'
    }
  );

  const QB = mongoose.model('QB', QBSchema);

  module.exports = QB;