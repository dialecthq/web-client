var express = require('express');
var router = express.Router();
var {fire} =  require('../fire');

/* GET users listing. */
router.post('/register', function(req, res, next) {
  fire.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .then((userCredential) => {
    console.log('1')
    fire.firestore().collection('users').doc(userCredential.user.uid).set({
      name: req.body.name,
      email: req.body.email,
      target: req.body.target,
      native: req.body.native,
      country: req.body.country,
      timezone: req.body.timezone
    }).then((data) => {
      console.log('2')
      res.json({status: 200, message: 'successfully registered user', data: {
        name: req.body.name,
        email: req.body.email,
        target: req.body.target,
        native: req.body.native,
        country: req.body.country,
        timezone: req.body.timezone
      }});
    }).catch((error) => {
      console.log(error)
      res.json({status: 400, message: 'could not register user'})
    })
  })
  .catch((error) => {
    res.json({status: 400, message: 'could not register user'})
  });
});

module.exports = router;
