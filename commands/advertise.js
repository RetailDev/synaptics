const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    
    
    let argsresult;
    let mChannel = message.guild.channels.cache.get("919165758490165318")

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        let qq = new Discord.MessageEmbed().setTitle(`${message.author.username} is Advertising!`).setDescription(`**${argsresult}**`)
        mChannel.send("", qq)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}

module.exports.config = {
    name: "advertise",
    description: "",
    usage: "!advertise",
    accessableby: "Members",
    aliases: []
}