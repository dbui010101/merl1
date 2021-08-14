const fs = require('fs')
const  express = require('express')

const app = express()
const port= 4242

app.get('/', (req,res) => res.send('Great ! It works.'))

app.listen(port, () => console.log(`Notre application node se lance sur : http://localhost:${port}`))