
const database = require('./database.json');

functions = {
    mentionHandler: (M, msg) => {
        let eatMatcher = msg.data.status.content.indexOf("吃")
        let jokeMatcher = msg.data.status.content.indexOf("笑话")
        if (eatMatcher > 0) {
            let replyContent = database['eat'][Math.floor(Math.random() * database['eat'].length)]
            M.post('statuses', {
                status: '@' + msg.data.account.username + ' ' + replyContent,
                in_reply_to_id: msg.data.status.id
            })
            console.log(`[INFO] ${new Date().toISOString()} @${msg.data.account.username} requested [eat].`)
            return
        }
        else if (jokeMatcher > 0) {
            let replyContent = database['joke'][Math.floor(Math.random() * database['joke'].length)]
            M.post('statuses', {
                status: '@' + msg.data.account.username + ' ' + replyContent,
                in_reply_to_id: msg.data.status.id
            })
            console.log(`[INFO] ${new Date().toISOString()} @${msg.data.account.username} requested [joke].`)
            return
        }
    }
}

module.exports = functions