"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const propertySchema = new mongoose_1.Schema({
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const Property = mongoose_1.default.model('Property', propertySchema);
exports.default = Property;
