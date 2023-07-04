const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))

app.get("/", async(req,res,next) => {
    res.json({message: 'deneme'})
})

const database = require('./config/database');


const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
app.use(authRoute);
app.use(postsRoute);


database
  .sync()
  .then(() => {
    console.log('Veritabanı bağlantısı başarıyla kuruldu.');
  })
  .catch((error) => {
    console.log('Veritabanı bağlantısı sırasında bir hata oluştu:', error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("App is running!");
});  
