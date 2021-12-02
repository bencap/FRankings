const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
mongoose.Promise = global.Promise;

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${process.env.accountName}:${process.env.mongoKey}@${process.env.accountName}.documents.azure.com:${process.env.mongoPort}/${process.env.databaseName}?ssl=true`;

function connect() {
mongoose.set('debug', true);
return mongoose.connect(mongoUri, {});
}

module.exports = {
connect,
mongoose
};