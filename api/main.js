// main.js

const colors        =   require('colors');
const morgan        =   require('morgan');
const compression   =   require('compression');
const helmet        =   require('helmet');
const bp            =   require('body-parser');
const cors          =   require('cors');
const errHandler    =   require('errorhandler');
const session       =   require('express-session');

const mid           =   require('./src/methods/index');
const api_gateway   =   require('./src/gateway/api');
const config        =   require('./src/config/index');
const env           =   process.env.NODE_ENV || 'development';

const port          =   process.env.PORT || 7060;
const express       =   require('express');
const app           =   express();

const { spawnAgoraProcess } = require('./src/utils');

app.use(compression());
app.use(morgan('combined'));
app.use(bp.json());
app.use(helmet());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', cookie: { secure: true, maxAge: 60000 }, saveUninitialized: true, resave: true }));
app.use(cors({ origin: ['localhost:8756'], credentials: true }));

app.use(    mid.middleware      );
app.get(    '/',    mid.root    );
app.use(    '/api' ,  api_gateway  );
app.set(    'clientSecret', config.cs   );

spawnAgoraProcess();

// :: deploy application server

app.listen( port ).on( 'listening' , () => {
    console.log( colors.blue.underline( 'Recast application server is running on: http://localhost:' + port ) );
});

module.exports = app;
