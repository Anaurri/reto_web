const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    name: {
        type: String,
        required: 'An user name is required'
    },
    manufacturer: {
        type: String,
        required: 'A manufacturer is required'
    },
    description: {
        type: String,
        required: 'A description is required'
    },
    color: {
        type: String,
        required: 'A color is required'
    },
    price: {
        type: Number,
        required: 'An user name is required'
    },
    imageFileName: {
        type: String,
        required: 'Image is required',
        default: `https://res.cloudinary.com/djzlb3fzs/image/upload/v1618507467/astroturismo/logo_pack2_7_zmithl.png`,
        validate: {
            validator: function (value) {
                try {
                    const url = new URL(value);
                    return url.protocol === 'http:' || url.protocol === 'https:'
                } catch (error) {
                    return false;
                }
            },
            message: props => `Invalid image URL`
        }
    },
    screen: {
        type: String,
        required: 'A screen description is required'
    },
    processor: {
        type: String,
        required: 'A processor description is required'
    },
    ram: {
        type: Number,
        required: 'A ram description is required'
    },

})


const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
