const VideoBlog = require('../models/videoblog');

async function index(req, res) {
    try {
        const videoblogs = await VideoBlog.find({ uid: req.query.uid }).sort('date');
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
        req.query.uid = videoblog.uid;
        index(req, res);
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'something went poops' });
        
    }
}

async function deleteVideoblog(req, res) {
    try {
        const deletedVideoblog = await VideoBlog.findByIdAndDelete(req.params.id);
        req.query.uid = deletedVideoblog.uid;
        index(req, res)
    } catch (error) {
        res.status(401).json({ error: 'something went poops' });
    }
}

async function update(req, res) {
    try {
        const updatedVideoblog = await VideoBlog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        req.query.uid = updatedVideoblog.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went poops' });
    }
}

module.exports = {
    index,
    create,
    delete: deleteVideoblog,
    update
};