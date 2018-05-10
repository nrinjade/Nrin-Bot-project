 const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = ">=";

client.login("NDM3MjIzMDE5MTU3Mzg5MzE0.DdXSLA.Its0nh90tBKewOKQ4sUBW1iHLLc");

client.on ("ready",() => {
    console.log("Hay haaay! Je suis là, pour vous aider.")
    client.user.setGame("Prefix:(>=) Mentionnes NrinjadeII pour plus d'informations")
});
client.on("message", message =>{

    if(message.content === prefix + "version"){
        message.reply ("Version actuel:0.0.0.1 Alpha 1re Partie");
        console.log('Nrinjade III dit la version');
    }

    if(message.content === prefix + "legion"){
        var legion_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Liste des membres de la Légion du Kastelpônten")
        .setDescription("Mes chers légionnaires sont listés ici")
        .addField("Liste:")
        message.channel.sendMessage(legion_embed);
        console.log("Nrinjade III récite la liste des noms des légionnaires")
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez ma liste des commandes")
        .addField(">=aide", "Affiche la page d'aide")
        .addField(">=aide <nom de la commande>", "Affiche la page d'aide spécifique à la commande")
        .addField(">=version", "Affiche la version du bot")
        .addField(">=legion", "Donne la liste des membres de la Légion")
        .addField(">=nrinjade", "Donne des portraits de Nrinjade")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_embed);
        console.log("Nrinjade III récite la page d'aide")
    }
});
