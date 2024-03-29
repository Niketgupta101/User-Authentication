const path = require('path');

require('dotenv-safe').config({
    path: path.join(__dirname, '../../.env'),
    example: path.join(__dirname, '../../.env.example'),
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
    mongouri: process.env.MONGO_URI,

    EmailClientId : process.env.EMAIL_CLIENT_ID,
    EmailClientSecret : process.env.EMAIL_CLIENT_SECRET,
    EmailRedirectURL : process.env.EMAIL_REDIRECT_URL,
    EmailRefreshToken : process.env.EMAIL_REFRESH_TOKEN,

    UploadClientId : process.env.UPLOAD_CLIENT_ID,
    UploadClientSecret : process.env.UPLOAD_CLIENT_SECRET,
    UploadRedirectURI : process.env.UPLOAD_REDIRECT_URI,
    UploadRefreshToken : process.env.UPLOAD_REFRESH_TOKEN
};