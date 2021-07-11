var express = require('express');
var router = express.Router();
var livekitApi = require('livekit-server-api');
var AccessToken = livekitApi.AccessToken;

var API = 'APINew5XQnFMJ5f'
var SECRET = 'Aet3DQKAXhJTsE6e9OepHS9ay1I5sfr31itxhaTNrQhB'

/* GET users listing. */
router.get('/join', (req, res, next) => {
  const {uid, username, roomName} = req.query
  console.log(username)

  const at = new AccessToken(API, SECRET, {
    identity: uid,
    metadata: username
  });
  at.addGrant({ roomJoin: true, room: roomName });

  const token = at.toJwt();
  res.json({token: token})
})

module.exports = router;
