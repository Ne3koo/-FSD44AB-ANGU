import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import router from './routes';
import passportInstance from './auth';
import session from 'express-session';
import cookieParser from 'cookie-parser';
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');

const port: number = 3000;
const database: string = "mongodb://127.0.0.1:27017/cms";
const app = express();

const sessionStore = new MongoDBStore({
  uri: database,
  collection: "sessions"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard badger',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
} ));
app.use(passportInstance.authenticate('session'));

app.use((err: any, req: any, res: any, next: any) => {
  if (err) {
    const status = err.status || 500;
    res.status(status).json({
      status: 'error',
      statusCode:status,
      stack: err.stack
    });
  }
});

app.use(express.static(path.join(__dirname, '../www')));
app.use("/api", router);
// app.all('/admin',
//   (req, res, next) => {
//     if (!req.user) {
//       res.redirect('/login');
//     } else {
//       next();
//     }
//   }
// )
app.all(/^[^.]*$/,
  (req, res, next) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../www') });
  }
);


app.listen(3000, () => {
  console.log(`listening http://localhost:${port}`)
    
  mongoose.connect(database);
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
  db.once('open', () => {
    console.log('Connecté à la base de données MongoDB.');
  });
});

