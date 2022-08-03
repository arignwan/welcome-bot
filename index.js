const express = require("express")
const app = express();
const port = 3000

app.get('/', (reg,res) => res.send('Wo'))

app.listen(port, () =>
  console.log(`Your app is listening a https://localhoist:${port}`)
)


const Discord = require('discord.js')
const client = new Discord.Client()
const { EmbedBuilder } = require('discord.js');
const config = require("./config.json")

client.on("ready", async () => {
  console.log(`Bot is has been deployed 🚀`)
  client.user
    .setActivity(`MENYAMBUT TAMU`, { type: "PLAYING" }) //bot status
    .catch(error => console.log(error))
})

client.on("guildMemberAdd", async member => {
  
  const message = `Selamat Datang di Server **Warkop Ujang** <@${member.id}> 🥰`

  const channel = member.guild.channels.cache.get(config.channelId);
  channel.send(message);

  const embed = new Discord.MessageEmbed()
  
  .setColor(0x3498DB)
  .setAuthor("Mang Ujang☕", "https://cdn.discordapp.com/avatars/909420653449469992/e84b77e3528cb79cdf5c32d3c85db8ec.png?size=256")
  .setTitle("Warkop Ujang☕")
  .setURL("https://discord.gg/pzWeqaRQrZ")
  .setDescription("Sebuah server yang diperuntukan untuk melepas penat setelah malakukan kegiatan yang membuat pikiran ada lelah :)") 
  .setImage("https://cdn.discordapp.com/attachments/910087909024075776/910088185067999232/welcome.gif")       
  .setThumbnail("https://cdn.discordapp.com/avatars/910018612289499146/de5e660bcda6a1cdbef7b8f204e19ac1.png?size=256")
  
  
  .setTimestamp()
  .setFooter("© 2022 Warkop Ujang || Have a nice day😄🥰", "https://cdn.discordapp.com/avatars/910018612289499146/de5e660bcda6a1cdbef7b8f204e19ac1.png?size=256");
  
  channel.send(embed);
      
});
  
  
  


client.login(config.token)