const express = require('express');

const Ticket = require('../models/ticket');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { cpf } = req.body;
    
    try {
        if (await Ticket.findOne({ cpf }))
            return res.status(400).send({ error: 'Ticket, Already Created' });

        const ticket = await Ticket.create(req.body);

        return res.send({ ticket });
    }
    catch(err){
        return res.status(400).send({ error: 'Registration Failed '});
    }
});

router.get('/getall', async(req, res) => {
    try {
        const getTickets = await Ticket.find({})
        return res.send({ getTickets });
    }
    catch{
        return res.status(400).send({ error: 'No Ticket' });
    }
});

router.get('/getbyid/:id', async(req, res) => {
    const { id } = req.params

    try{
        const getTicketId = await Ticket.findById(id);
        
        return res.send({ getTicketId })
    }
    catch{
        return res.status(400).send({ error: 'No Ticket' });      
    }
})

router.put('/authenticateticket/:id', async(req, res) => {
    try{
        const { id } = req.params

        const updateTicket = await Ticket.findByIdAndUpdate(id, {active: true})

        return res.send({ updateTicket })
    }
    catch{
        return res.status(400).send({ error: 'No Ticket to update' });
    }
});

router.delete('/deleteticket/:id', async(req, res) => {
    try {
        const { id } = req.params

        const deletedticket = await Ticket.findByIdAndDelete(id)
        if (deletedticket === null){
            return res.send({ msg: 'Conclude' });   
        }

    }catch{
        return res.status(400).send({ error: 'Failed' })
    }
})

module.exports = app => app.use('/', router);