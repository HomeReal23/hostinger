import {Request, Response} from "express"
import { Resend } from "resend";

export const postMail = async (req: Request, res: Response) => {
    try{
        const {clientEmail, name, userEmail, number, content} = req.body
        const apiKey = process.env.RESEND_KEY
      
        const resend = new Resend(apiKey);

        const data = await resend.emails.send({
            from: userEmail,
            to: "info@homerealstate.es",
            subject: "Hello World",
            html: content + number,
          });


        res.status(200).send({msg: "El e-mail ha sido enviado con éxito"});

    }catch(e){
        console.log(e);
        res.status(500).json({ message: (e as Record<string,string>).message });
    }
}