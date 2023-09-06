"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.postProperty = exports.getOneProperty = exports.getPropertys = void 0;
const property_model_1 = __importDefault(require("../models/property.model"));
const getPropertys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Propertys = yield property_model_1.default.find();
        res.send(Propertys);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.getPropertys = getPropertys;
const getOneProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const finalProperty = yield property_model_1.default.findById(id);
        res.send(finalProperty);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.getOneProperty = getOneProperty;
const postProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, title, searchType, poblation, neighborhood, propertyType, bedrooms, address, m2, propertyHeight, buildingHeight, bathrooms, price, garage, pool, furnished, pets, terrace, garden, elevator, accessibleProperty, a_c, heating, floorsType, windowsType, doorsType, mainDoor, antique, status, independentLiving, hotWater, laundry, bail } = req.body;
        console.log(req.body);
        if (!userId || !address || !title || !searchType || !poblation || !m2 || !buildingHeight || !bedrooms || !bathrooms || !propertyType || !garage || !pool || !furnished || !pets || !terrace || !garden || !accessibleProperty || !a_c || (!price && !bail))
            return res.status(404).json("A required value is missing");
        const files = req.files;
        const images = files.map((image) => ({ data: ("/" + address + "/" + image.filename) }));
        const propertyToSave = {
            createdBy: userId,
            title,
            address,
            searchType,
            poblation,
            neighborhood,
            propertyType,
            bedrooms: Number(bedrooms),
            m2: Number(m2),
            propertyHeight: Number(propertyHeight),
            buildingHeight: Number(buildingHeight),
            bathrooms: Number(bathrooms),
            garage: Number(garage),
            pool: Number(pool),
            furnished: Number(furnished),
            pets: Number(pets),
            terrace: Number(terrace),
            garden: Number(garden),
            accessibleProperty: Number(accessibleProperty),
            a_c: Number(a_c),
            heating: Number(heating),
            floorsType,
            windowsType,
            doorsType,
            mainDoor,
            antique: Number(antique),
            status,
            independentLiving: Number(independentLiving),
            hotWater,
            elevator: Number(elevator),
            laundry: Number(laundry),
            price: price ? Number(price) : "",
            bail: bail ? Number(bail) : "",
            images
        };
        const newProperty = new property_model_1.default(propertyToSave);
        yield newProperty.save();
        res.status(201).json(newProperty);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.postProperty = postProperty;
const updateProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.updateProperty = updateProperty;
const deleteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield property_model_1.default.deleteOne({ _id: id });
        res.send({ message: 'Property was deleted successfully' });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.deleteProperty = deleteProperty;
