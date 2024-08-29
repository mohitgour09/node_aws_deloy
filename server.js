const express = require("express");
const app = express();

app.get('/api/get', (req, res) => {
    res.send({message : 'node aws deployment'})
})

app.get('/api/get_data', (req, res) => {
    res.send({message : 'Route 2nd'})
})

app.listen(9000, () => {
    console.log(`server listening to port 9000`);
});
