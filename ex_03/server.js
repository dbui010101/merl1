const fs = require('fs')
const  express = require('express')

const app = express()
const port= 4242






fs.readFile('nouveauFichier.html', 'utf8', function(err, data) {
    const content = data;
    app.get('/', (req,res) => {
        res.send(content)
    })
})


app.listen(port, () => console.log(`Notre application node se lance sur : http://localhost:${port}`))



