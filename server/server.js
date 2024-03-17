const express = require('express');
require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 8080;
const EmailRouter = require('./routes/EmailRoute');
const app = express();
const cors = require('cors');
const path = require('path')
// const path = require('../client/dist/index.html')
// port = 8080;

// middleware
app.use(express.json());
app.use(cors());

// static file  access

app.use(express.static(path.join(__dirname, '../client/dist')))


// routes
app.use('/api/user', EmailRouter);


app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'../client/dist/index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
