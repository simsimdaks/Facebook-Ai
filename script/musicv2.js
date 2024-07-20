const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  author: "raniel",
  name: 'musicv2',
  description: 'Searches for music on YouTube',
  async execute(message, args) {
    if (!args[0]) {
      return message.reply('Please provide a search term!');
    }

    try {
      const query = args.join(' ');
      const response = await axios.get(`https://nethwieapi.onrender.com/ytsearch?name=${query}`);
      const videos = response.data;

      if (videos.length === 0) {
        return message.reply('No results found for that search term.');
      }

      const embed = new MessageEmbed()
        .setTitle('YouTube Search Results')
        .setColor('#FF0000')
        .setDescription(videos.map((video, index) => `**${index + 1}.** ${video.title} - [${video.duration}](${video.url})`).join('\n'));

      message.channel.send({ embeds: [embed] });

    } catch (error) {
      console.error(error);
      message.reply('An error occurred while searching for music.');
    }
  },
};