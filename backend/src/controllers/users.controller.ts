// import User from "../models/client.model"

import User from "../models/User.model"
import {Request, Response} from "express"

export const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await User.find()
        res.send(users)
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const user = await User.findById(id)
        res.send(user)
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

// export const postUser = async (req: Request, res: Response) => {
//     try{
//         const {name, email, role, picture,number} = req.body

//         console.log(req.body, "req.body")

//         if(!email || !name ) res.status(404).json("Missing required values")
//         const newUser = new User({email, name,picture,number, role})
//         await newUser.save();
//         res.status(201).json(newUser)
        
//     }catch(e){
//         console.log(e);
//         res.status(500).json({ message: (e as Record<string,string>).message });
//     }
// }

export const updateUser = async (req: Request, res: Response) => {
    try{
        const {email, role, surname, movil} = req.body

        const Surname = surname.charAt(0).toUpperCase() + surname.slice(1)

        const user = await User.findOne({email})

        if(user){
            user.role = role
            user.surname = Surname
            user.movil = movil
            const update = await user?.save()
            return res.json(update)
        }
        

    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        await User.deleteOne({_id: id})
        res.send({message: 'Member deleted successfully'})
        
    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}