const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(403).send("Access denied. Header");
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return res.status(403).send("Access denied. Token");
        }

        req.user = tokenService.validateAccessToken(accessToken);
        next();
    } catch (e) {
        res.status(400).json({ message: e.message}); // Invalid token or jwt expired
    }
};