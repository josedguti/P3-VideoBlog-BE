const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const videoblogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: function() {
            const today = new Date().toLocaleDateString();
            return today;
        },
    },
    howtoenjoy: {
        type: String,
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('VideoBlog', videoblogSchema);
