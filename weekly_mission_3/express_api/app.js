const express = require('express');
// App express
const app = express();
app.use(express.json())

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})