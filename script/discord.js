
const axios = require('axios');

module.exports = {
  name: 'music',
  description: 'Play music from YouTube!',
  async execute(message, args) {
    if (!args[0]) {
      return message.channel.send('Please provide a song name or YouTube link!');
    }

    try {
      const response = await axios.get(`https://nethwieapi.onrender.com/ytsearch?name=${args.join(' ')}`);
      const data = response.data;

      if (data.length === 0) {
        return message.channel.send('No results found. Please try again with a different search term.');
      }

      const songEmbed = new MessageEmbed()
        .setTitle(data[0].title)
        .setURL(data[0].url)
        .setDescription(`**Artist:** ${data[0].artist}\n**Duration:** ${data[0].duration}`)
        .setThumbnail(data[0].thumbnail)
        .setColor('#FF5733'); // Orange color

      message.channel.send({ embeds: [songEmbed] });

    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while searching for the song.');
    }
  },
};