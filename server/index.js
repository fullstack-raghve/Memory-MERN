const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
app.use(bodyParser.json());

//import postRoutes from './routes/posts.js';
const postRoutes = require('./routes/posts');



 app.use(bodyParser.json({ limit: '30mb', extended: true }));
 app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use('/posts', postRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello Worldeeeeeee!');
//   });
   
  const CONNECTION_URL = 'mongodb+srv://rahul:1234567890@cluster0.zoahh.mongodb.net/products_test?retryWrites=true&w=majority';
  const PORT = process.env.PORT|| 5000;
  
  mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

    mongoose.set('useFindAndModify', false);
    
