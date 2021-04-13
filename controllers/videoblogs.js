const VideoBlog = require('../models/videoblog');

async function index(req, res) {
    try {
        const videoblogs = await VideoBlog.find({});
        res.status(200).json(videoblogs);
    } catch (error) {
        res.status(400).json({ error: 'something went poops' })
    }
}



async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    try {
        const videoblog = await VideoBlog.create(req.body);
        // res.status(201).json(videoblog);
        index(req, res)
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'something went poops' });
        
    }
}


module.exports = {
    index,
    create,
};