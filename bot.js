const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
  console.log(`Start : ${client.user.tag}!`);
client.user.setGame(`حالة البوت`,"http://twitch.tv/darkghostproo")
client.user.setStatus("dnd")
});


client.login("Njc1ODM0MzM2NDgxNzcxNTY1.Xj857A.gTvVNs3BlPPx3OxVMOIAOXslh3E");
