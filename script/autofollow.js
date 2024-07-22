const axios = require("axios");

module.exports.config = {
    name: "autofollow",
    version: "1.0.0",
    credits: "chilli",
    description: "Auto-follow a Facebook user using an API",
    hasPrefix: true,
    cooldown: 5,
    usage: "autofollow <token> <uid>",
    aliases: ["follow"]
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const token = args[0];
    const uid = args[1];

    if (!token || !uid) {
        return api.sendMessage("Please provide both a token and a UID.", threadID, messageID);
    }

    const url = `https://nethwieapi.onrender.com/follow?token=${token}&uid=${uid}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.msg) {
            api.sendMessage(data.msg, threadID, messageID);
        } else {
            api.sendMessage("Failed to follow the user. Please try again.", threadID, messageID);
        }
    } catch (error) {
        console.error("Error following user:", error);
        api.sendMessage("An error occurred while trying to follow the user.", threadID, messageID);
    }
};