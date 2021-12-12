const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        let qq = new Discord.MessageEmbed().setTitle("New Announcement/Update").setDescription(`**${argsresult}**`).setColor("RED").setFooter(`Sent by ${message.author}`)
        mChannel.send("", qq)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}


module.exports.config = {
    name: "say",
    description: "sends a message that was inputted to a channel",
    usage: "!say",
    accessableby: "Staff",
    aliases: ["acc", "announcement"]
}