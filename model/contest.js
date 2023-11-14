const mongoose = require("mongoose")

const contestSchema = new mongoose.Schema({
    nameOfContest:{
        type: String,
        required: true,
        // unique: true
    },
    // dateAndTimeOfContest:{
    //     type: String,
    //     required: true,
    // },
    // divisionOfContest:{
    //     type: String,
    // },
    // lengthOfContest:{
    //     type: String,
    // },
    idOfContest:{
        type: Number, 
    },
    typeOfContest:{
        type: String,
    }
});

const Contest = mongoose.model("contest", contestSchema);

module.exports = {
    Contest
}