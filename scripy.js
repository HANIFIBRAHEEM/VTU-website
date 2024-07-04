const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true, // Set to true for HTTPS environments
    },
}));

const helmet = require('helmet');

app.use(helmet());
