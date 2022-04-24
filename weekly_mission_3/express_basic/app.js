//Usando objeto express
const express = require('express');
//App de Express
const app = express();
//Puerto localhost:3000
const port = 3000;

// llamando url local host 3000
app.get('/', (req, res) => {
    res.send('Hello World!');
})
//llamando la ruta localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX');
})
// llamando datos desde objeto
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
})

//Con listen inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})