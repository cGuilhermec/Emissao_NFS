import { create as createXml } from 'xmlbuilder';
import { NFSData } from '../models/nfsModel';

export function gerarXMLNFS(data: NFSData): string {
    const xml = createXml('nota')
        .ele('infNfse')
            .ele('identificacaoRps')
                .ele('numero', data.identificacaoRps.numero).up()
                .ele('serie', data.identificacaoRps.serie).up()
                .ele('tipo', data.identificacaoRps.tipo).up()
            .up()
            .ele('dataEmissao', data.dataEmissao).up()
            .ele('prestador')
                .ele('cnpj', data.prestador.cnpj).up()
                .ele('inscricaoMunicipal', data.prestador.inscricaoMunicipal).up()
            .up()
            .ele('tomador')
                .ele('cpf', data.tomador.cpf).up()
                .ele('razaoSocial', data.tomador.razaoSocial).up()
                .ele('endereco')
                    .ele('logradouro', data.tomador.endereco.logradouro).up()
                    .ele('numero', data.tomador.endereco.numero).up()
                    .ele('bairro', data.tomador.endereco.bairro).up()
                    .ele('codigoMunicipio', data.tomador.endereco.codigoMunicipio).up()
                    .ele('uf', data.tomador.endereco.uf).up()
                    .ele('cep', data.tomador.endereco.cep).up()
                .up()
            .up()
            .ele('servicos')
                .ele('servico')
                    .ele('codigo', data.servicos[0].codigo).up()
                    .ele('valor', data.servicos[0].valor).up()
                    .ele('iss', data.servicos[0].iss).up()
                .up()
            .up()
        .end({ pretty: true });

    return xml;
}
