const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    
    
    let argsresult;
    let mChannel = message.guild.channels.cache.get("919165744829313044")

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        let qq = new Discord.MessageEmbed().setTitle(`${message.author.username} is selling!`).setDescription(`**${argsresult}**`)
        mChannel.send("", qq)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}

module.exports.config = {
    name: "sell",
    description: "",
    usage: "!sell",
    accessableby: "Members",
    aliases: []
}