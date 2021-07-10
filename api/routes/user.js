var express = require('express');
var router = express.Router();
var {fire} =  require('../fire');
var {languageOptions} = require('../data/languageOptions')
var {countryOptions}= require('../data/countryOptions')
var {timezoneOptions} = require('../data/timezoneOptions')

/* GET users listing. */
router.get('/login', function(req, res, nex) {
  fire.auth().signInWithEmailAndPassword(req.query.email, req.query.password)
  .then((userCredential) => {
    fire.firestore().collection('users').doc(userCredential.user.uid).get().then((doc) => {
      res.json({status: 200, message: 'successfully logged user in', user: doc.data()})
    }).catch((error) => {
      res.json({status: 400, message: 'could not get user object', user: null, error})
    })
  })
  .catch((error) => {
    res.json({status: 400, message: 'could not get user object', user: null, error})
  });
})


router.get('/', function(req, res, next) {
  if(fire.auth().currentUser) {
    const {uid} = fire.auth().currentUser
    fire.firestore().collection('users').doc(uid).get().then((document) => {
      res.json({status: 200, message: 'got user data', user: document.data()})
    }).catch(() => {
      res.json({status: 200, message: 'could not get user data', error: 'could not get user data', user: null})
    })
  } else {
    res.json({message: 'no user is logged in', error: 'could not find user', user: null})
  }
})

router.get('/signout', function(req, res, next) {
  fire.auth().signOut().then(() => {
    res.json({status: 200, message: 'successfully logged out', user: null})
  }).catch(() => {
    res.json({status: 200, message: 'could  not log user out'})
  })
})

module.exports = router;
