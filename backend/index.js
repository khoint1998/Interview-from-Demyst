const express =  require('express');
const connectDB = require('./config/db')

const app = express();

//Connect DB
connectDB();

app.use(express.json({extended: false}));

//Define routes
app.use('/account-software', require('./routes/accountSoftware'));
app.use('/decision-engine', require('./routes/decisionEngine'));

const PORT = 8080;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))