import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Jean dos santos', email: 'jeanddg@hotmail.com' },
    { name: 'Diego', email: 'diego@rockeatset.com'}
];

const index = (req: Request, resp: Response) => {
    return resp.json(users);
}

const create = (req: Request, resp: Response) => {
    const emailService = new EmailService();
    emailService.sendMail({
        to: {
            email: 'jean@ddg.com',
            name: 'JeanFSantos'
        },
        message: {
            subject: 'Bem vindo(a)',
            body: 'Seja bemvindo ao sistema'
        }
    })
    resp.send();
}

export default  {
    index,
    create
}