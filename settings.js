const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "256700273834"
global.ownername = "iconic tech"
global.ytname = "YT: Iconictechnology"
global.socialm = "GitHub: kineboi"
global.location = "Uganda, Wakiso, Kampala"

global.ownernumber = '256700273834'  //creator number
global.ownername = 'iconic tech' //owner name
global.botname = 'ﾌㄖҜ乇尺 爪卂乂' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'GlobalTech\n\nContact: +923444844060'

//console view/theme
global.themeemoji = '🪀'
global.wm = "ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ"

//theme link
global.link = 'https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r'

//custom prefix
global.prefa = '.'

//false=disable and true=enable
global.autoRecording = 'false'//auto recording
global.autoTyping = 'false'//auto typing
global.autorecordtype = 'false' //auto typing + recording
global.autoread = 'false'//auto read messages
global.autobio = 'false'//auto update bio
global.anti91 = false //auto block +91 
global.autoswview = 'false'//auto view status/story
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🚨ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ🚨',
}
module.exports = {
    // ... other settings ...
    security: {
        antiSpam: true,
        maxMessages: 10, // Messages per 10 seconds
        blockDuration: 300 // 5 minutes in seconds
    }
};
//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./JokerMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
