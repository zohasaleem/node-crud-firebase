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
const cmsRef = db.ref('cms');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cmsRouter = require('./routes/cms');
app.use('/cms', cmsRouter(cmsRef, admin));

app.use(express.json());

app.use(express.static('public'));

app.get('/cms.html', (req, res) => {
  res.sendFile(__dirname + '/cms.html');
});

app.get('/slider.html', (req, res) => {
  res.sendFile(__dirname + '/slider.html');
});

app.get('/horizontalSlider', (req, res) => {
  res.sendFile(__dirname + '/horizontalSlider.html');
});

app.get('/verticalSlider', (req, res) => {
  res.sendFile(__dirname + '/verticalSlider.html');
});

app.listen(9000, () => {
    console.log("Server started..");
});
