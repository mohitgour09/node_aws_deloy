const express = require("express");
const app = express();

app.get('/api/get', (req, res) => {
    res.send({message : 'node aws deployment'})
})

app.listen(9000, () => {
    console.log(`server listening to port 9000`);
});
