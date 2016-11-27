import chai = require('chai')
import express = require('express')
import router from './router'
const expect = chai.expect
chai.use(require('chai-http'))


interface Response extends ChaiHttp.Response {
  text: string
}

describe('router', () => {

  let app: express.Application
  let agent: ChaiHttp.Agent

  beforeEach(() => {
    app = express()
    app.use(router)
    agent = chai.request.agent(app)
  })

  it('responds to a GET at /', () =>
    agent.get('/').then((response: Response) => {
      expect(response).to.have.status(200)
      expect(response.text).to.include('<!DOCTYPE html>')
    }))

  it('responds to a GET at /api/projects', () =>
    agent.get('/api/projects').then((response: Response) => {
      expect(response).to.have.status(200)
      expect(response.body)
        .to.have.property('data')
        .that.has.property('projects')
        .that.is.an('array')
    }))

  it('responds to a GET at /api/about', () =>
    agent.get('/api/about').then((response: Response) => {
      expect(response).to.have.status(200)
      expect(response.body)
        .to.have.property('data')
        .that.has.property('about')
        .that.is.an('object')
    }))

  it('responds to a GET at /api/blog', () =>
    agent.get('/api/blog').then((response: Response) => {
      expect(response).to.have.status(200)
      expect(response.body)
        .to.have.property('data')
        .that.has.property('posts')
        .that.is.an('array')
    }))

})
