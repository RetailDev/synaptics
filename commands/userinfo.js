const Discord = require("discord.js")
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first()
    let uEmbed = new Discord.MessageEmbed()
    .setColor(colours.red_light)
    .setTitle("User Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${user.username} Info`, user.displayAvatarURL)
    .addField("**Username:**", `${user.username}`, true)
    .addField("**Discriminator:**", `${user.discriminator}`, true)
    .addField("**ID:**", `${user.id}`, true)
    .addField("**Status:**", `${user.presence.status}`, true)
    .addField("**Created At:**", `${user.createdAt}`, true)
    .setFooter();

    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "!userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui"]
}
