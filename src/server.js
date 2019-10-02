const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
 const path = require('path')


const app = express();


// mongosse config
mongoose.connect("mongodb+srv://castro:3249101318@produtos-0x9wa.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
});

// cors configurado para dar acesos tatol a api
app.use(cors())
// para que as req entendao json
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);
