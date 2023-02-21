const { FastifyInstance } = require('fastify')

module.exports = async function (app) {
  app.get('/test', async function (request, response) {
    return 'hello world from test PR 1'
  })
}
