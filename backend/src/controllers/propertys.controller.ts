import {Request, Response} from "express"
import Property from "../models/property.model";

export const getPropertys = async (req: Request, res: Response) => {
    try{
        const Propertys = await Property.find()
        res.send(Propertys)
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

export const getOneProperty = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const finalProperty = await Property.findById(id)
        res.send(finalProperty)
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

export const postProperty = async (req: Request, res: Response) => {

    try{

        const {userId,title, searchType, poblation, neighborhood, propertyType, bedrooms, address, m2, propertyHeight, buildingHeight, bathrooms, price, garage, pool, furnished, pets, terrace, garden, elevator, accessibleProperty, a_c, heating, floorsType, windowsType, doorsType, mainDoor, antique, status, independentLiving, hotWater, laundry, bail} = req.body
        console.log(req.body)

        if(!userId || !address || !title || !searchType || !poblation  || !m2 || !buildingHeight || !bedrooms || !bathrooms  || !propertyType || !garage || !pool || !furnished || !pets || !terrace || !garden || !accessibleProperty || !a_c || (!price && !bail)) return res.status(404).json("A required value is missing")
        
        const files = req.files
        const images = (files as Express.Multer.File[]).map((image: Express.Multer.File) => ({data: ("/" + address + "/" + image.filename)}));


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
        }

        
        const newProperty = new Property(propertyToSave)
        await newProperty.save();
        res.status(201).json(newProperty)
        
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

export const updateProperty = async (req: Request, res: Response) => {
    try{
        
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

export const deleteProperty = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        await Property.deleteOne({_id: id})
        res.send({message: 'Property was deleted successfully'})
        
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}