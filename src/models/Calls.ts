export interface CallDB {
  cnpj: string,
  nome_solicitante: string,
  setor: string,
  descricao: string
}

export class Call {    
    constructor(
      private cnpj: string,
      private nome_solicitante: string,
      private setor: string,
      private descricao: string
    ) {}

    public getCnpj() :string {
      return this.cnpj;
    }
    public setCnpj(value: string): void {
      this.cnpj = value
    }

    public getNome_solicitante(): string {
      return this.nome_solicitante
    }
    public setNome_solicitante(value: string): void {
      this.nome_solicitante = value
    }

    public getSetor(): string {
      return this.setor
    }
    public setSetor(value: string): void {
      this.setor = value
    }

    public getDescricao(): string {
      return this.descricao
    }
    public setDescricao(value: string): void {
      this.descricao = value
    }

}