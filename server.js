const express = require('express')
const Twit = require('twit')
const app = express()

var T = new Twit({
    consumer_key: 'jnRSQfyPT0ouSnHrKhWppfMUX',
    consumer_secret: 'LU5hsb3eBSPwGU1NWDJQcfeUtEO3AOKI66sDsyg3CU5jfbzyWv',
    access_token: '844367741364645890-NYQsHNC9NVcV2Z4mRlLnaIylxlcwcTB',
    access_token_secret: 'sybvZYjbt6YVczYsyDuAuLnVQiwAdwazQ5aBqdfstgbrs',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})

//TOP TRENDS
app.get('/toptrends', (request, response) => {

    T.get('https://api.twitter.com/1.1/trends/place.json?id=4118', (err, data, response) => {
        
        for(let eachData of data){
            console.log(eachData)
        }

    })

    response.sendStatus(200)
})

//twetts
app.get('/twetts', (request, response) => {

    T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=elonmusk&count=2', (err, data, response) => {
        
        for(let eachData of data){
            console.log(eachData)
        }

    })

    response.sendStatus(200)
})


app.listen(1111)