const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const admin = require('firebase-admin');
const serviceAccount = require('./uploadimage-6caaa-firebase-adminsdk-rpkac-d3e875388b.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://uploadimage-6caaa-default-rtdb.firebaseio.com',
    storageBucket: 'uploadimage-6caaa.appspot.com' 

});

const db = admin.database();
const cmsRef = db.ref('blogs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cmsRouter = require('./routes/blogs');
app.use('/blogs', cmsRouter(cmsRef, admin));


app.use(express.json());

app.use(express.static('public'));

app.get('/blogs.html', (req, res) => {
  res.sendFile(__dirname + '/blogs.html');
});

app.listen(9000, () => {
    console.log("Server started..");
});
