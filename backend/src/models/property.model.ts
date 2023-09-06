import mongoose, {Schema} from "mongoose";

const propertySchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    searchType: {
        type: String,
        required: true,
    },
    poblation: {
        type: String,
        required: true,
    },
    neighborhood: {
        type: String,
        required: false,
    },
    propertyType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    m2: {
        type: Number,
        required: true,
    },
    propertyHeight: {
        type: Number,
        required: true,
    },
    buildingHeight: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: false,
    },
    garage: {
        type: Number,
        required: true,
    },
    pool: {
        type: Number,
        required: true,
    },
    furnished: {
        type: Number,
        required: true,
    },
    terrace: {
        type: Number,
        required: true,
    },
    pets: {
        type: Number,
        required: true,
    },
    garden: {
        type: Number,
        required: true,
    },
    elevator: {
        type: Number,
        required: true,
    },
    accessibleProperty: {
        type: Number,
        required: true,
    },
    a_c: {
        type: Number,
        required: true,
    },
    heating: {
        type: Number,
        required: true,
    },
    floorsType: {
        type: String,
        required: true,
    },
    windowsType: {
        type: String,
        required: true,
    },
    doorsType: {
        type: String,
        required: true,
    },
    mainDoor: {
        type: String,
        required: true,
    },
    antique: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    independentLiving: {
        type: Number,
        required: true,
    },
    hotWater: {
        type: String,
        required: true,
    },
    laundry: {
        type: Number,
        required: true,
    },
    bail: {
        type: Number,
        required: false,
    },
    images: [{
        data: {
          type: String,
          required: true,
        },
      }],
});

const Property = mongoose.model('Property', propertySchema)

export default Property