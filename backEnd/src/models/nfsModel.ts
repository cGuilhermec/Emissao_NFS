export interface IdentificacaoRps {
    numero: string;
    serie: string;
    tipo: number;
}

export interface Prestador {
    cnpj: string;
    inscricaoMunicipal: string;
}

export interface Endereco {
    logradouro: string;
    numero: string;
    bairro: string;
    codigoMunicipio: string;
    uf: string;
    cep: string;
}

export interface Tomador {
    cpf: string;
    razaoSocial: string;
    endereco: Endereco;
}

export interface Servico {
    codigo: string;
    valor: number;
    iss: number;
}

export interface NFSData {
    identificacaoRps: IdentificacaoRps;
    dataEmissao: string;
    prestador: Prestador;
    tomador: Tomador;
    servicos: Servico[];
}
