//======================== CONSTS ===========================
const Discord = require('discord.js');
const client = new Discord.Client( { disableMentions: "everyone" } );
const { readdir } = require('fs');
const config = require('./config.json');
client.config = config;
const prefix = (config.prefix);
const cron = require('cron');
const canvas = require('discord-canvas'),
    welcomeCanvas = new canvas.Welcome(),
    leaveCanvas = new canvas.Goodbye()

const {
    unicolor,
    imageLink,
    LogsChannel
} = require('./config.json');
let universalColor = unicolor.toUpperCase()
const owner = "744431935316688916"
//=================== READY && AUTO JOIN-VOICE ========================
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! . Im Ready .`);
	client.user.setPresence({
		status: 'idle',
		activity: {
			name: '𝐙 𝐄 𝐓 𝐀',
			type: 'WATCHING',
		}
	})
	const channel = client.channels.cache.get("919570637121523752");
	if (!channel) return console.error("I did not find the channel!");
	channel.join().then(connection => {
		connection.voice.setSelfDeaf(true); 
		connection.voice.setSelfMute(false); 
		console.log("I entered the channel");
	}).catch(e => {
		console.error(e);
	});
});
//================== CLONE ======================
let scheduledMessage1 = new cron.CronJob('59 29 02 * * *', () => {

  const guild = client.guilds.cache.get('817396052419543101');

  const channel = guild.channels.cache.find(channel => channel.name === "╵📃〢𝐂𝐡𝐚𝐭");

  const originalPosition = channel.position;

  channel.clone(undefined, true, false, 'Needed a clone').then(clone => {
    clone.setPosition(originalPosition)
    channel.delete()
  })
})

// When you want to start it, use:
scheduledMessage1.start()





let scheduledMessage2 = new cron.CronJob('59 29 08 * * *', () => {

  const guild = client.guilds.cache.get('817396052419543101');

  const channel = guild.channels.cache.find(channel => channel.name === "╵📃〢𝐂𝐡𝐚𝐭");

  const originalPosition = channel.position;

  channel.clone(undefined, true, false, 'Needed a clone').then(clone => {
    clone.setPosition(originalPosition)
    channel.delete()
  })
})

// When you want to start it, use:
scheduledMessage2.start()




let scheduledMessage3 = new cron.CronJob('59 29 14 * * *', () => {

  const guild = client.guilds.cache.get('817396052419543101');

  const channel = guild.channels.cache.find(channel => channel.name === "╵📃〢𝐂𝐡𝐚𝐭");

  const originalPosition = channel.position;

  channel.clone(undefined, true, false, 'Needed a clone').then(clone => {
    clone.setPosition(originalPosition)
    channel.delete()
  })
})

// When you want to start it, use:
scheduledMessage3.start()





let scheduledMessage4 = new cron.CronJob('59 29 20 * * *', () => {

  const guild = client.guilds.cache.get('817396052419543101');

  const channel = guild.channels.cache.find(channel => channel.name === "╵📃〢𝐂𝐡𝐚𝐭");

  const originalPosition = channel.position;

  channel.clone(undefined, true, false, 'Needed a clone').then(clone => {
    clone.setPosition(originalPosition)
    channel.delete()
  })
})


// When you want to start it, use:
scheduledMessage4.start()


//================== Welcome && Leave ==================
client.on('guildMemberAdd', async member => {
    let image = await welcomeCanvas
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setMemberCount(member.guild.memberCount)
        .setGuildName(member.guild.name)
        .setAvatar(member.user.displayAvatarURL({
            format: 'png'
        }))
        .setColor("border", universalColor)
        .setColor("username-box", universalColor)
        .setColor("discriminator-box", universalColor)
        .setColor("message-box", universalColor)
        .setColor("title", universalColor)
        .setColor("avatar", universalColor)
        .setBackground(imageLink)
        .toAttachment()


    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
    
    const welchannel = client.channels.cache.get(config.WelcomeChannel);

    const welcomembed = new Discord.MessageEmbed()
        .setTitle("[ A User Has Been Joind ]")
        .setColor("#FFFFFF")
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(
            `**User :** <@${member.user.id}>\n\n**User Name:** \`\`\`${member.user.tag}\`\`\`\n**User Id:** \`\`\`[${member.user.id}]\`\`\`\n**Joined At:** \`\`\`${new Date().toUTCString()}\`\`\`\n**Account Age:** \`\`\`${Math.floor((new Date() - member.user.createdAt) / 86400000)} Days\`\`\`\n\n**Guild:** \`\`\`${member.guild.name}\`\`\`\n**Guild Id:** \`\`\`${member.guild.id}\`\`\``
        )
        .attachFiles(attachment)
        .setImage('attachment://welcome-image.png')
        .setTimestamp()
        .setFooter(member.guild.name, member.guild.iconURL());
        
    welchannel.send(`|| <@&919570614287732736> ||\n\n<@${member.user.id}>` ,welcomembed)
})

client.on('guildMemberRemove', async member => {
    let image = await leaveCanvas
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setMemberCount(member.guild.memberCount)
        .setGuildName(member.guild.name)
        .setAvatar(member.user.displayAvatarURL({
            format: 'png'
        }))
        .setColor("border", universalColor)
        .setColor("username-box", universalColor)
        .setColor("discriminator-box", universalColor)
        .setColor("message-box", universalColor)
        .setColor("title", universalColor)
        .setColor("avatar", universalColor)
        .setBackground(imageLink)
        .toAttachment()


    let attachment = new Discord.MessageAttachment(image.toBuffer(), "leave-image.png");

    const welchannel = client.channels.cache.get(config.WelcomeChannel);

    const byembed = new Discord.MessageEmbed()
        .setTitle("[ A User Has Been Leaved ]")
        .setColor('BLACK')
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(
            `**User :** <@${member.user.id}>\n\n**User Name:** \`\`\`${member.user.tag}\`\`\`\n**User Id:** \`\`\`[${member.user.id}]\`\`\`\n**Joined At:** \`\`\`${new Date().toUTCString()}\`\`\`\n**Account Age:** \`\`\`${Math.floor((new Date() - member.user.createdAt) / 86400000)} Days\`\`\`\n\n**Guild:** \`\`\`${member.guild.name}\`\`\`\n**Guild Id:** \`\`\`${member.guild.id}\`\`\``
        )
        .attachFiles(attachment)
        .setImage('attachment://leave-image.png')
        .setTimestamp()
        .setFooter(member.guild.name, member.guild.iconURL());
        
    welchannel.send(`|| <@&919570614287732736> ||\n\n<@${member.user.id}>` ,byembed)
})

client.on('message', async message => {
    if (message.content === "add") {
        client.emit('guildMemberAdd', message.member)
    }

    if (message.content === "leave"){
        client.emit('guildMemberRemove', message.member)
    }
});
//=============================================

//========================================================================================
client.on('message', message => {
  let messageArry = message.content.split(" ")
  let rolecmd = messageArry[0]
  let rolename = messageArry[1]
  let rolecolor = messageArry[2]
  let topic = message.guild.roles.cache.get("932301288203509842")
  let topicposition = topic.position
  if (rolecmd == `!role`) {

    const justembed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription("**For create personal role you should use this command only in <#938349886380843048> channel ⚠**")
      .setColor("YELLOW")
      .setTimestamp();

    if (message.channel.id !== "938349886380843048") return message.channel.send(`<@${message.author.id}>`, justembed), message.delete()


    const haveembed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription("**Actually you have personal role ⛔**")
      .setColor("RED")
      .setTimestamp();

    if (message.member.roles.cache.get("932301288203509842")) return message.channel.send(`<@${message.author.id}>`, haveembed)

    message.guild.roles.create({
      data: {
        name: `⬩︱${rolename}`,
        position: `${topicposition}`,
        color: `${rolecolor}`,
        permissions: 0
      }
    }).then(role => {
      message.guild.members.cache.get(message.author.id).roles.add(role)
      message.guild.members.cache.get(message.author.id).roles.add(topic)
      const embed = new Discord.MessageEmbed()
        .setColor(`${rolecolor}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setDescription(`\n\n **Role :** <@&${role.id}>\n\`\`\`\nRole Name : ${role.name}\nRole Id : ${role.id}\nRole Color : #${role.color}\nRole Position : ${role.position}\n\`\`\``)
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTimestamp();
      message.channel.send(`<@${message.author.id}>, **Your __Personal Role__ has been created and added to you ✅**`, embed)
    })
  }
});

client.on('message', message => {
  const allowedusers = [
    "901782976214487070",
    "744431935316688916",
    "755836231585103902",
    "842416407023321110"
  ]
  if (message.channel.id === "938349886380843048") {
    if (message.content.includes !== '!role') {
      if (!allowedusers.includes(message.author.id)) message.delete()
    }
  }
});
//========================================================================================

//============================= PING COMMAND ====================================
client.on('message', message => {

	if (message.author.id !== `${owner}`) return false;

    if (message.content === `${prefix}ping`) {

        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addFields(
                { name: 'Bot Ping', value: `${Math.round(client.ws.ping)} ms` },
                { name: 'Your Ping', value: `${Date.now() - message.createdTimestamp} ms` }
            );
        message.channel.send(embed)
    }
});
//============================= REACTIONS ====================================
client.on("message", message => {
  if(message.channel.id === "919570645707276348"){
    message.react('🎥')
   }
});

client.on("message", message => {
  if(message.channel.id === "919570647284318259"){
    message.react('🎴')
   }
});

client.on("message", message => {
  if(message.channel.id === "919570648815251487"){
    message.react('🤣')
    message.react('😐')
   }
});

client.on("message", message => {
  if(message.channel.id === "920568534248067093"){
    message.react('❤')
    message.react('💔')
   }
});

client.on("message", message => {
  if(message.channel.id === "919570651176648735"){
    message.react('🌐')
   }
});

client.on("message", message => {
  if(message.channel.id === "919570653315743744"){
    message.react('📲')
   }
});

client.on("message", message => {
  if(message.channel.id === "919570654309797948"){
    message.react('🔗')
   }
});

//============================= EVAL COMMAND ====================================
client.on("message", async message => {
  if (message.author.id !== "744431935316688916") return;
  if (message.content.startsWith("!eval")) {
    try {
      const args = message.content.split(" ")
      var result = message.content.split(" ").slice(1).join(" ")
      let evaled = await eval(result);
      const evalEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .addFields(
          { name: 'INPUT :', value: `\`\`\`js\n${args}\`\`\``, inline: false },
          { name: 'OUTPUT :', value: `\`\`\`js\n\'${evaled}\'\`\`\``, inline: false }
        )
      message.channel.send(evalEmbed)
    } catch (err) {
      const args = message.content.split(" ")
      console.log(err)
      const evalerrEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .addFields(
          { name: 'ERROR :', value: `\`\`\`js\n${err}\`\`\``, inline: false }
        )
      message.channel.send(evalerrEmbed)
    }
  }
});

//====================== LOGIN ======================
client.login(config.token);
