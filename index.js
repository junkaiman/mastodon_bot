const Mastodon = require('mastodon-api')
const config = require('./config')
const functions = require('./functions')

const M = new Mastodon({
    access_token: config.access_token,
    api_url: 'https://forum.gallinula.com/api/v1/'
})

const listener = M.stream('streaming/user')

listener.on('message', msg => {
    if (msg.event == 'notification' && msg.data.type == 'mention') {
        functions.mentionHandler(M, msg)
    }
})

listener.on('error', err => {
    console.log(err)
})