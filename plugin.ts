/// <reference path="./global.d.ts" />
import { FastifyInstance } from 'fastify'

export default async function(app: FastifyInstance) {
  app.get('/test', async function(request, response) {
    return "hello world"
  })
}
