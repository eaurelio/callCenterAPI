import { Request, Response } from "express"
import { CallBusiness } from "../business/CallBusiness"
import { BaseError } from "../errors/BaseError"
import { CallDB } from "../models/Calls"

export class CallController {
  public criarChamado = async(req: Request, res: Response) => {
    try {
      const input: CallDB = {
        cnpj: req.body.cnpj,
        nome_solicitante: req.body.nome_solicitante,
        setor: req.body.setor,
        descricao: req.body.descricao
      }

      const callBusiness = new CallBusiness()
      const output =  await callBusiness.criarChamado(input)

      res
        .status(201)
        .send(output)

    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Erro inesperado")
      }
    }
  }
}