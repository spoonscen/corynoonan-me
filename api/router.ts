import * as express from 'express'
const router = express.Router()
const projects = require('./data/projects.json')

interface Response extends Express.Response {
  send: (item: any) => void
}

router.get('/', (req: Express.Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>Cory Noonan</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            <link rel="shortcut icon" href="../public/assets/bikeicon.png" type="image/x-icon">
            <link rel="stylesheet" type="text/css" href="../public/assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div id="app"></div>
            <script src="../node_modules/react/dist/react.js"></script>
            <script src="../node_modules/react-dom/dist/react-dom.js"></script>
            <script src="../dist/bundle.js"></script>
        </body>
    </html>
  `)
})

router.get('/api/projects', (req: Express.Request, res: Response) => {
  res.send({
    data: {
      projects
    }
  })
})

router.get('/api/about', (req: Express.Request, res: Response) => {
  res.send({
    data: {
      about: 'Coming Soon'
    }
  })
})

router.get('/api/blog', (req: Express.Request, res: Response) => {
  res.send({
    data: {
      posts: [
        {
          title: 'Test',
          datePosted: '11/27/2016',
          content: 'blog post content',
        }
      ]
    }
  })
})

export default router
