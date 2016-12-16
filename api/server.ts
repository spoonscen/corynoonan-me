import * as express from 'express'
const defaultExpressApp = express()
import router from './router'
import * as http from 'http'


const PORT = process.env.PORT || 7777

interface Response extends Express.Response {
  send: (item: string) => void
}

export module expressApp {
  export function setupExpress(app: express.Application, router: express.Router): http.Server {
    app.use('/public', express.static('public'))
    app.use('/dist', express.static('dist'))
    app.use('/node_modules', express.static('node_modules'))
    app.use('/', router)
    app.use('/api/projects', router)
    app.use('/api/blog', router)
    app.use('/api/about', router)
    const server = app.listen(PORT, () => { console.log(`corynoonan.me is listening on ${PORT}`) })

    return server
  }
}

const server = expressApp.setupExpress(defaultExpressApp, router)
export default server
