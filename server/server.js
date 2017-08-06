const express = require('express'),
      app = express(),
      PORT = 8081,
      renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup

app.use('/build', express.static('build'))

app.get('/', (req, res) => {
  res.send(
    `
      <html>
        <head></head>
        <body>
          <div id='view'></div>
          <script src='/build/bundle.js'></script>
        </body>
      </html>
    `
  )
})

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
