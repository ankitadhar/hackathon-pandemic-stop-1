const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grievanceSchema = new Schema({
    category: {type: String},
    target_src: {type: String},
    description: {type: String},
    country: {tyep: String},
    state: {type: String},
    email: {type: String},
    phone: {type: Number},
    status: {type: String}
    }, {
        timestamps: true
    });

const Grievance = mongoose.model('Exercise', grievanceSchema);

module.exports = Grievance;