const moongose = require('mongoose');

// moongose.connect('mongodb://localhost/noderest', { useMongoClient: true });
moongose.connect('mongodb://localhost/noderest');
moongose.Promise = global.Promise;

module.exports = moongose;