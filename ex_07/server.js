const  express = require('express')

const app = express()
const port= 4242
var myMERN_module = require ('./myMERN_module.js')


app.route('/files/:name')
.get(async function functionget(req, res) { //succes
  result = myMERN_module.read(req.params.name);
  res.send(await result)
})
.post(async function functionpost(req, res) {
  result2 = myMERN_module.create(req.params.name);
  res.send(await result2)
})
.delete(async function functiondelete(req, res) {
  result3 = myMERN_module.delete(req.params.name);
  res.send(await result3)
});

app.put('/files/:name/:content', async function functionput(req, res) {
  result4 = myMERN_module.read(req.params.name, req.params.content);
  res.send(await result4);
});


app.listen(port, () => console.log(`Notre application node se lance sur : http://localhost:${port}`))
