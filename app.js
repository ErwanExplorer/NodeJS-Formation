import Fastify from 'fastify'
import { findTodos, removeTodo } from './functions/todos_storage.js'
const fastify = Fastify({
    logger: false
})

// Declare a route
fastify.get('/todos', async (request, reply) => {
    reply.send(await findTodos())
})

fastify.delete('/todos', async (request, reply) => {
    await removeTodo(parseInt(request.query.id, 10))
    reply.code(204)
    console.log(request.query.id)
})

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})