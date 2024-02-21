const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const admin = require('firebase-admin');
const serviceAccount = require('./uploadimage-6caaa-firebase-adminsdk-rpkac-d3e875388b.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://uploadimage-6caaa-default-rtdb.firebaseio.com'
});

const db = admin.database();
const cmsRef = db.ref('cms');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cmsRouter = require('./routes/cms');
app.use('/cms', cmsRouter(cmsRef));

app.use(express.json());

app.use(express.static('public')); // Serve static files from the 'public' directory

// Serve cms.html file when accessing /cms.html route
app.get('/cms.html', (req, res) => {
  res.sendFile(__dirname + '/cms.html');
});


app.listen(9000, () => {
    console.log("Server started..");
});
