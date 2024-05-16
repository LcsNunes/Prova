class TimesController {

    async create(request, response) {
        try {
            const { nome,anoDeFundacao, pais, tecnico } = request.body
            const jogador = await prisma.jogador.create({
                data: {
                    
                nome,
                anoDeFundacao, 
                pais,
                tecnico 
                }
            })
            response.json(jogador)
        } catch (err) {
            return response.status(409).send()
        }
    }


    async update(request, response) {
        try {
            const { id, nome, anoDeFundacao, tecnico } = request.body
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
            response.json(user)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async MostrarTodos(request, response) {
        try {
            const jogador = await prisma.jogador.MostrarTodos({})
            response.json(jogador)
        } catch {
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
        } catch {
            return response.status(409).send()

        }
    }
}

module.exports = TimesController