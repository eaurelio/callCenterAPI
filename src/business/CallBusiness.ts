import { BadRequestError } from "../errors/BadRequestError"
import { CallDB  } from "../models/Calls"


const atendentes: {
  Cartoes: CallDB[];
  Emprestimos: CallDB[];
  OutrosAssuntos: CallDB[];
} = {
  Cartoes: [],
  Emprestimos: [],
  OutrosAssuntos: [],
};

const filaEspera : CallDB[]= [];

function distribuirChamado (input: CallDB) {
  const { setor } = input;

  switch (setor) {
    case 'cartoes':
      if (atendentes.Cartoes.length < 3) {
        atendentes.Cartoes.push(input);
      } else {
        filaEspera.push(input);
      }
      break;
    case 'emprestimos':
      if (atendentes.Emprestimos.length < 3) {
        atendentes.Emprestimos.push(input);
      } else {
        filaEspera.push(input);
      }
      break;
    default:
      if (atendentes.OutrosAssuntos.length < 3) {
        atendentes.OutrosAssuntos.push(input);
      } else {
        filaEspera.push(input);
      }
  }
}

export class CallBusiness {

  public criarChamado = async (input: CallDB) => {
    const { cnpj, nome_solicitante, setor, descricao } = input

    if (!cnpj) { throw new BadRequestError("informe o 'cnpj'") }
    if (typeof cnpj != 'string') {
      throw new BadRequestError("o 'cnpj' deve ser string")
    }

    if (!nome_solicitante) { throw new BadRequestError("informe o 'nome_solicitante'") }
    if (typeof nome_solicitante != 'string') {
      throw new BadRequestError("o 'nome do solicitante' deve ser string")
    }

    if (!setor) { throw new BadRequestError("informe o 'setor'") }
    if (typeof setor != 'string') {
      throw new BadRequestError("o 'setor' deve ser string")
    }

    if (!descricao) { throw new BadRequestError("informe a 'descricao'") }
    if (typeof descricao != 'string') {
      throw new BadRequestError("o 'descrição' deve ser string")
    }
    if (descricao.length < 5) {
      throw new BadRequestError("informe uma descrição válida para o atendimento")
    }

    await distribuirChamado(input)

    console.table(atendentes)
    console.table(filaEspera)

    return 'Sua solicitação foi direcionada para o nosso time e em breve você será atendido!'

  }
}
