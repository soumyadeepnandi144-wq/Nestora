const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type:String,
       required:true,
    },
    description: {
        type:String,
    },
    image: {
    filename: {
        type: String,
    },
    url: {
        type: String,
        default: 'https://unsplash.com/photos/a-hammock-between-two-palm-trees-on-a-beach-7NSiz8r96t4',
    },
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
