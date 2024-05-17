const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

class TimesController {

    async create(request, response) {
        try {
            const { nome,anoDeFundacao, pais, tecnico } = request.body
            const times = await prisma.times.create({
                data: {
                    
                nome,
                anoDeFundacao,
                pais,
                tecnico
                }
            })
            response.json(times)
        } catch (err) {
            return response.status(409).send()
        }
    }


    async update(request, response) {
        try {
            const { id, nome, anoDeFundacao, pais, tecnico } = request.body
            const times = await prisma.times.update({
                where: {
                    id: id
                },
                data: {
                nome,
                anoDeFundacao,
                pais,
                tecnico

                }
            })
            response.json(times)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async MostrarTodos(request, response) {
        try {
            const times = await prisma.times.findMany({})
            response.json(times)
        } catch {
            return response.status(409).send()
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.body
            const times = await prisma.times.delete({
                where: {
                    id: id
                }
            })
            response.json(times)
        } catch {
            return response.status(409).send()

        }
    }
}

module.exports = TimesController