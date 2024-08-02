const axios = require('axios');
module.exports.config = {
  name: 'deku',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  description: "To chat deku AI",
  usage: "deku [prompt]",
  credits: 'Neth', // Cmd created, API by Joshua Sy
  cooldown: 2,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
    try {
            const prompt = encodeURIComponent(args.join(" "));
            if (!prompt) return api.sendMessage("🤖 Please enter a prompt!!!", event.threadID, event.messageID);
            api.sendMessage("🤖 Deku AI is processing your question...", event.threadID, event.messageID);
            const apiUrl = "https://deku-rest-api.replit.app/deku?prompt=";
            const response = await axios.get(apiUrl + prompt);
            const responseData = response.data.data;
            return api.sendMessage(`🤖: ${responseData}\n\n\nThis bot was created on PROJECT BOTIFY by Neth.`, event.threadID, event.messageID);
        } catch (error) {
            console.error(error);
            return api.sendMessage(error.message, event.threadID, event.messageID);
        }
};
