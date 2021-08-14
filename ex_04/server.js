
const  express = require('express')

const app = express()
const port= 4242

const fs = require('fs');


fs.readFile('nouveauFichier.html', 'utf8', function(err, data) {
    const content = data;
    if (err){
        return console.log(err);
    }
    tableau=data.split("<body>");
    app.get('/name/:name', (req,res) => {
        const name = req.params.name
        valeur=data.replace(tableau[1],`Hello ${name}`);
        res.send(valeur)
    });
    app.get('/name', (req,res) => {
        valeur=data.replace(tableau[1],`Hello unknown`);
        res.send(valeur)
    });
})







app.listen(port, () => console.log(`Notre application node se lance sur : http://localhost:${port}`))



