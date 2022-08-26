const express =  require('express');
const connectDB = require('./config/db')

const app = express();

//Connect DB
connectDB();

app.use(express.json({extended: false}));

//Define routes
app.use('/', require('./route/index'));
app.use('/api/url', require('./route/url'));

const PORT = 3000;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))