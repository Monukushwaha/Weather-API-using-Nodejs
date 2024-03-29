
// ***********************we create mysql connection using specifying the database of choice:


var express    = require("express");
var login = require('./loginroutes.js');
console.log(login.register)
// var bodyParser = require('body-parser');
var exports = module.exports = {};
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// console.log(router)
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
app.listen(5000);

