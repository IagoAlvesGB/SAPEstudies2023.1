const userService = require('../services/userService');
const oUserService = new userService();

module.exports = basicAuth;

async function basicAuth(req, res, next) {  
    if (req.path === '/user/authenticate') {
        return next();
    }
    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {   
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await oUserService.authenticate(username, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    // attach user to request object
    req.user = user

    next();
}