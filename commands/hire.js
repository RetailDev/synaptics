const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    
    
    let argsresult;
    let mChannel = message.guild.channels.cache.get("919165767671513138")

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        let qq = new Discord.MessageEmbed().setTitle(`${message.author.username} is hiring!`).setDescription(`**${argsresult}**`)
        mChannel.send("", qq)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}

module.exports.config = {
    name: "hire",
    description: "",
    usage: "!hire",
    accessableby: "Members",
    aliases: ["hire", "hire"]
}