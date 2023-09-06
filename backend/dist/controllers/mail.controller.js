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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMail = void 0;
const resend_1 = require("resend");
const postMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientEmail, name, userEmail, number, content } = req.body;
        const apiKey = process.env.RESEND_KEY;
        const resend = new resend_1.Resend(apiKey);
        const data = yield resend.emails.send({
            from: userEmail,
            to: "info@homerealstate.es",
            subject: "Hello World",
            html: content + number,
        });
        res.status(200).send({ msg: "El e-mail ha sido enviado con éxito" });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.postMail = postMail;
