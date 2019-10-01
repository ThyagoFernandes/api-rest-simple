let express = require('express');
let app = express();
let apiRoutes = require("./api-routes");
var port = process.env.PORT || 8080;

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('first page'));
app.listen(port, function () {
    console.log("Running RestHub on   port " + port);
})