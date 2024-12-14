const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("0114277563,")
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:cCBe2fBeA26f4eEbDbC2gD64226EHFg3@viaduct.proxy.rlwy.net:34483"
global.port= process.env.PORT || 5000
global.email = 'levijezzie@gmail.com'
global.blockJids = process.env.BLOCK_JID ||'120363165030810524@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363165030810524@g.us' ;
global.github = 'https://github.com/CYBER-THUSHAN/SHENU-QUEEN-V1'
global.location = 'KENYA 🇰🇪'
global.gurl = 'https://instagram.com // insta._.m.a.y.o.r
global.sudo = process.env.SUDO || '94710109956'
global.devs = '0114277563';
global.INBOX_BLOCK = 'true'
global.TIMEZONE = 'Asia/Colombo' 
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/daa9647f2139e462e4316.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'JEZZIE-MD🧚' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '🎃👾JEZZIE👾🎃' : process.env.OWNER_NAME,
  ownernumber: process.env.OWNER_NUMBER === undefined ? '0114277563' : process.env.OWNER_NUMBER,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '🚨⚠️ JEZZIE-MD:🎃👾JEZZIE👾🎃' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'JEZZIE-MD' : process.env.PACK_INFO.split(";")[1],	
  dl_limit: process.env.DL_SIZE || '350',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,fucked,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['#','!','.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  caption :process.env.CAPTION || "  \t🧚 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ⚠️👾Jezzie-MD👾⚠️*",
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
