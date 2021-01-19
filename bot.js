const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('nathen massage his balls', { type: 'WATCHING' });
});


client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('r!say') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });
