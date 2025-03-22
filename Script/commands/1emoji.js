const fs = require("fs");
module.exports.config = {
	name: "🙋‍♂️",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙋‍♂️",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("robot")==0 || event.body.indexOf("bot")==0 || event.body.indexOf("koi")==0 || event.body.indexOf("🙋‍♂️")==0) {
		var msg = {
				body: "এ্ঁই্ঁতো্ঁ আ্ঁমি্ঁ এ্ঁখা্ঁনে্ঁ🙋‍♂️",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx6.mp3`)
			}
			api.sendMessage( msg, , messageID);
    api.setMessageReaction("🙋‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }