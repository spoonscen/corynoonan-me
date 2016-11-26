import * as express from 'express'
const router = express.Router()


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
            <link rel="stylesheet" type="text/css" href="../dist/styles.css">
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
      projects: [
        {
          title: 'Spoonsauce',
          details: 'General Assembly final project (Angular)',
          description: 'As a hotsauce lover Spoonsauce was a way for me to start sharing my passion with the world.',
          link: 'http://spoonsauce.com',
          github: 'https://github.com/spoonscen/Spoonsauce',
          imageLinks: [
            'http://i.imgur.com/OZkH2Z2.jpg',
            'http://i.imgur.com/WlXe0Ec.jpg',
          ]
        }
      ]
    }
  })
})

export default router
