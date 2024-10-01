import { Request, Response } from 'express';
import { NFSData } from '../models/nfsModel';
import { gerarXMLNFS } from '../utils/XMLUtil';


const criarNFS = (req: Request, res: Response) => {
        const nfsData: NFSData = req.body;
        const xml = gerarXMLNFS(nfsData);
        
        res.set('Content-Type', 'application/xml');
        res.send(xml);

        console.log('Nota gerada com sucesso!');
    };


export const NFSController = {
    criarNFS,
};