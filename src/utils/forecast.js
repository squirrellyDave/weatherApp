const request = require('request')

const forecast = (long, lat, callback) => {
    const wxtoken = 'afec516b05306cdbdc1c0c67ad868f1c'
    const wxURL = 'https://api.darksky.net/forecast/' + encodeURIComponent(wxtoken) + '/' + lat + ',' + long
    request({ url: wxURL, json: true}, (error, { body }) => {
        if (error) {
            callback('Dark Sky is unreachable', undefined)
        } else if (body.error) {
            callback('Location is not found', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '  degrees outside.  There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports = forecast