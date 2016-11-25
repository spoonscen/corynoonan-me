var express = require('express')
var app = express()
const path = require('path')

app.use('/public', express.static('public'))
app.use('/dist', express.static('dist'))
app.use('/node_modules', express.static('node_modules'))



app.get('/', (req, res) => {
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

app.listen(3001, () => {
  console.log('corynoonan.me is listening on 3001')
})