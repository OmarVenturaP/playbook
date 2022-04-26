const express = require('express')
// App express
const app = express()
app.use(express.json())

const port = 3000

app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorer GET ALL REQUEST ${new Date()}`);
    const explorer1 = {id: 1, name: 'Omar1'}
    const explorer2 = {id: 2, name: 'Omar2'}
    const explorer3 = {id: 3, name: 'Omar3'}
    const explorer4 = {id: 4, name: 'Omar4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorer GET REQUEST ${new Date()}`)
    console.log(`API Explorer GET REQUEST ${req.params.id}`)
    const explorer = {id: 1, name: 'Omar1'}
    res.status(200).json(explorer)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})