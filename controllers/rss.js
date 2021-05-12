const rssRouter = require('express').Router()
const axios = require('axios')

console.log(axios)
const OAuth = require('oauth');

// 列出所有条目
rssRouter.get('/', async (request, response) => {
  const { code = '', redirect_uri='' } = request.query
  console.log(code, redirect_uri)
  var OAuth2 = OAuth.OAuth2
  var oauth2 = new OAuth2(
    '999999350',
    'W3k5ED46RSJme0mOhaRQXYe1mAdZwi3w',
    'https://www.inoreader.com/',
    'oauth2/auth',
    'oauth2/token',
    null
  )
  oauth2.getOAuthAccessToken(
    code,
    {
      'redirect_uri': redirect_uri,
      'grant_type':'authorization_code'
    },
    function (e, access_token, refresh_token, results){
      if(e){
        console.log('e: ',e)
      }else {
        console.log('bearer: ',access_token)
        return response.json({ message: 'create success', data: { token: access_token } })
      }
    })
})


module.exports = rssRouter