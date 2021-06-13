var express = require('express');
var router = express.Router();
var {fire} =  require('../fire');
var {languageOptions} = require('../data/languageOptions')
var {countryOptions}= require('../data/countryOptions')
var {timezoneOptions} = require('../data/timezoneOptions')

/* GET users listing. */
router.post('/register', function(req, res, next) {
  fire.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .then((userCredential) => {

    fire.firestore().collection('users').doc(userCredential.user.uid).set({
      name: req.body.name,
      email: req.body.email,
      target: req.body.target,
      native: req.body.native,
      country: req.body.country,
      timezone: req.body.timezone,
      username: req.body.username
    }).then((data) => {
      res.json({status: 200, message: 'successfully registered user', user: {
        name: req.body.name,
        email: req.body.email,
        target: req.body.target,
        native: req.body.native,
        country: req.body.country,
        timezone: req.body.timezone,
        username: req.body.username,
      }});
    }).catch((error) => {
      res.json({status: 200, message: 'could not upload user data to firestore'}, error)
    })
  })
  .catch((error) => {
    res.json({status: 200, message: 'could not register user'}, error)
  });
});

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

router.get('/check/username', function(req, res, next) {
  fire.firestore().collection('users').where("username", "==", req.query.username).get().then((querySnapshot) => {
    if (querySnapshot.docs.length > 0) {
      res.json({status: 200, message: 'username is not available.', available: false})
    } else {
      res.json({status: 200, message: 'username is available.', available: true})
    }
  }).catch((error) => {
    res.json({status: 400, message: 'could not check if username is available.', error})
  })
})

router.get('/check/email', function(req, res, next) {
  fire.firestore().collection('users').where("email", "==", req.query.email).get().then((querySnapshot) => {
    if (querySnapshot.docs.length > 0) {
      res.json({status: 200, message: 'email is already in use.', available: false})
    } else {
      res.json({status: 200, message: 'email is available.', available: true})
    }
  }).catch((error) => {
    res.json({status: 400, message: 'could not check if username is available.', error})
  })
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
