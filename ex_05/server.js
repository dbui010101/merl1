
const  express = require('express')
const fs = require('fs');
const app = express()
const port= 4242

fs.readFile('nouveauFichier.html', 'utf8', function(err, data) {
    const content = data;
    if (err){
        return console.log(err);
    }
    
    tableau=data.split("<body>");
    
    app.get('/name/:name', (req,res) => {
        const name = req.params.name
        age=req.query.age;
        if (age && name){
            valeur=data.replace(tableau[1],`Hello ${name}, you have ${age} yo`);
            res.send(valeur)
        }else if(!age && name){
            valeur=data.replace(tableau[1],`Hello ${name}, i dont know your age`);
            res.send(valeur)
        }
        
    });
    app.get('/name', (req,res) => {
        age=req.query.age;
        if(age){
            valeur=data.replace(tableau[1],`Hello unknown, you have ${age} yo`);
            res.send(valeur)
        }else if(!age){
            valeur=data.replace(tableau[1],`Hello unknown, i dont know your age`);
            res.send(valeur)
        }
        
    });
    
})






app.listen(port, () => console.log(`Notre application node se lance sur : http://localhost:${port}`))



