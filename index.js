const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = 0000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main.ejs');
});

app.get('/dchsuejbehhshjdbbshhsbsksihenjehehshbebehshebhehsjenshjsjskaksndnhsiskaknsnsisjjsjsjsksibsnshjsjsbshsusiksnhshsiskjsnbshsiaoaksnsjjsjakkskksnjsjjsoskksknshshsiiskskksjenendhdhuosowjebdhhaokskejdhhsisiakskejwkwopwisjdbbehsiskakdnjdjsiwjejdjdbhaiososoejndhsuaoosjdjdhdhiwoaodhdbjsiaosodjjdndksoaidjdjdjsoosodjdhskaosodidjdjjdjsiosidfhhdjsjsksodidifjjdjsjwksdjjffjjajhdhdhjsksisisjdjdjfjfhdjsosoaodoj', (req, res) => {
  const discordLink = process.env.dc;

  res.writeHead(302, { Location: discordLink });
  res.end();
});

app.get('*', function(req, res) {
  res.status(404).redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
