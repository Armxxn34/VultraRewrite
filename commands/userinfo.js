const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { time }  = require("@discordjs/builders")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Sends your/another users info")
    .addUserOption(option =>
        option
        .setName("user")
        .setDescription("The user you wanna check out")
        .setRequired(false)
        ),
    cooldown: 5,
    
    async execute(interaction) {
        const user = interaction.options.getMember("user") || interaction.member

 

        const embed = new MessageEmbed()
        .setTitle(`UserInfo`)
        .setThumbnail(user.displayAvatarURL())
        .setAuthor(user.tag, user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(`User:
Nickname: ${user.username}

ID: ${user.id.toString()}

Joined At: ${time(Math.floor(member.joinedTimestamp / 1000),"F").toString()}

Created at: ${time(Math.floor(member.user.createdTimestamp / 1000),"F").toString()}
`)
    await interaction.reply({embeds: [embed]})
    }
}
