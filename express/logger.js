const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().toISOString())
    // Call the next middleware function in the stack
    next();
}

export default logger;

//in older versions of js
// module.exports = logger;