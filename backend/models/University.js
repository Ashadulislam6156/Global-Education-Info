const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    ranking: {
        world: String,
        country: String
    },
    tuition: {
        amount: Number,
        currency: String
    },
    scholarships: [String],
    image: String,
    website: String
});

module.exports = mongoose.model('University', universitySchema); 