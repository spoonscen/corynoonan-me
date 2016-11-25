import * as express from 'express'
const app = express()
import router from './router'

interface Response extends Express.Response {
  send: (item: string) => void
}

app.use('/public', express.static('public'))
app.use('/dist', express.static('dist'))
app.use('/node_modules', express.static('node_modules'))
app.use('/', router)
app.use('/api/projects', router)

app.listen(7777, () => {
  console.log('corynoonan.me is listening on 7777')
})

export default app