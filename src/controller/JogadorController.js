const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

class JogadorController {

    async create(request, response) {
        try {
            const { nome,posicao,idade,nacionalidade } = request.body
            const jogador = await prisma.jogador.create({
                data: {
                    nome,
                    posicao,
                    idade,
                    nacionalidade
                }
            })
            response.json(jogador)
        } catch (err) {
            return response.status(409).send()
        }
    }


    async delete(request, response) {
        try {
            const { id } = request.body
            const jogador = await prisma.jogador.delete({
                where: {
                    id: id
                }
            })
            response.json(jogador)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async MostrarTodos(request, response) {
        try {
            const jogador = await prisma.jogador.findMany({})
            response.json(jogador)
        } catch {
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const {id, nome,posicao,idade,nacionalidade } = request.body
            const jogador = await prisma.jogador.update({
                where: {
                    id: id
                },
                data: {
                    nome,
                    posicao,
                    idade,
                    nacionalidade

                }
            })
            response.json(jogador)
        } catch (err) {
            return response.status(409).send()
        }
    }
}






module.exports = JogadorController