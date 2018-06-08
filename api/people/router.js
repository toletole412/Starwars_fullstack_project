const Router = require('express').Router
const router = new Router()
const request = require('request')



router.get("/people", (req, res, next) => {
    var uri = "https://swapi.co/api/people/?page=1";
      request(
        {
          url: uri,
          json: true
        },
        function(error, response, body) {
          if (!error && response.statusCode === 200) {
            res.json({
              people: body
            })
            res.end()
          }
        }
      )
})


module.exports = router
