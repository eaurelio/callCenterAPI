import express from "express"
import { CallController } from "../controller/CallController"

export const callRouter = express.Router()
const callController = new CallController()

callRouter.post("/criar", callController.criarChamado)
