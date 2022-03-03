// I use the mongo DB to get my simple class schema, and this file was to create the model;
const moongose = require('../database');

const TicketSchema = new moongose.Schema({
    event: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        unique: true,
        required: true, 
    }, 
    active: {
        type: Boolean,
        default: false, 
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
});

const Ticket = moongose.model('Ticket', TicketSchema);

module.exports = Ticket;