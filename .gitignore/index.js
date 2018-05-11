 const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = ">=";

client.login("NDM3MjIzMDE5MTU3Mzg5MzE0.DdXSLA.Its0nh90tBKewOKQ4sUBW1iHLLc");

client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bien le bonjour, cher visiteur! Je suis le fils de Nrinjade,si vous voulez plus d informations du bot, mp @Nrinjade#1205  ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

client.on ("ready",() => {
    console.log("Hay haaay! Je suis là, pour vous aider.")
    client.user.setGame("Prefix:(>=) Mentionnes NrinjadeII pour plus d'informations")
});
client.on("message", message =>{

    if(message.content === prefix + "version"){
        message.reply ("Version actuelle:0.0.0.1 Alpha 2de Partie");
        console.log('Nrinjade III dit la version');

    if(message.content === prefix + "mappe"){
        message.reply ("C'est la Caaarte!" + " " + "https://cdn.discordapp.com/attachments/436489984854196235/444571876627578881/Mappen_da_Pinter.png");
        console.log('Nrinjade III donne la carte');

    if(message.content === prefix + "legion"){
        var legion_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Liste des membres de la Légion du Kastelpônten")
        .setDescription("Mes chers légionnaires sont listés ici")
        .addField("Liste:")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(legion_embed);
        console.log("Nrinjade III récite la liste des noms des légionnaires")

    if(message.content === prefix + "leg"){
        var legion_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Liste des membres de la Légion du Kastelpônten")
        .setDescription("Mes chers légionnaires sont listés ici")
        .addField("Liste:")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(legion_embed);
        console.log("Nrinjade III récite la liste des noms des légionnaires")
    }

    if(message.content === prefix + "provincesliste"){
        var pl_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Liste des provinces du Kastelpônten")
        .addField("Lisieux","Wixtexio (Normandie)")
        .addField("Caen","Wixtexio (Normandie)")
        .addField("Bruxelles","CreeperDiamant (Les Etoiles)")  
        .addField("Anvers","CreeperDiamant (Les Etoiles)")
        .addField("Brabant","CreeperDiamant (Les Etoiles)")
        .addField("Liège","CreeperDiamant (Les Etoiles)")
        .addField("Wallon","CreeperDiamant (Les Etoiles)")
        .addField("France","CreeperDiamant (Les Etoiles)")
        .addField("Allemagne","CreeperDiamant (Les Etoiles)")
        .addField("Russie","CreeperDiamant (Les Etoiles)")
        .addField("Météore","CreeperDiamant (Les Etoiles)")
        .addField("L'océan","CreeperDiamant (Les Etoiles)")
        .addField("Netince","Netaec (Netince)")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(pl_embed);
        console.log("Nrinjade III récite la liste des noms des légionnaires")
    }
    
    if(message.content === prefix + "aide" + " " + "aide"){
        var help_help_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez les utilisations de la commande >=aide")
        .addField(">=aide", "Affiche la page d'aide")
        .addField(">=aide <nom de la commande>", "Affiche la page d'aide spécifique à la commande")
        .addField("Aliases", ">=help, >=h")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_help_embed);
        console.log("Nrinjade III récite la page d'aidede la commande >=aide")

     if(message.content === prefix + "aide" + " " + "version"){
         var help_version_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez les utilisations de la commande >=version")
        .addField(">=version", "Affiche la version actuelle")
        .addField("Aliases", ">=ver, >=v")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_version_embed);
        console.log("Nrinjade III récite la page d'aidede la commande >=version")      

    if(message.content === prefix + "aide" + " " + "legion"){
         var help_legion_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez les utilisations de la commande >=legion")
        .addField(">=legion", "Affiche la liste des légionnaires du Kastelpônten")
        .addField(">=legion [choix de l'avant-poste]", "Affiche la liste des légionnaires de l'avant-poste choisi")
        .addField("Alias", ">=leg,")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_legion_embed);
        console.log("Nrinjade III récite la page d'aidede la commande >=legion")    
        
    if(message.content === prefix + "aide" + " " + "provincesliste"){
         var help_pl_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez les utilisations de la commande >=provincesliste")
        .addField(">=provincesliste", "Affiche la liste des provinces du Kastelpônten")
        .addField("Alias", ">=pl")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_pl_embed);
        console.log("Nrinjade III récite la page d'aide de la commande >=provincesliste")
        
    if(message.content === prefix + "aide" + " " + "carte"){
         var help_carte_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez les utilisations de la commande >=carte")
        .addField(">=carte", "Affiche la carte")
        .addField("Aliases", ">=map, >=mappe")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_carte_embed);
        console.log("Nrinjade III récite la page d'aide de la commande >=carte")
  
    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#610B5E")
        .setTitle("Page d'aide de Nrinbot")
        .setDescription("Vous avez ma liste des commandes")
        .addField(">=aide", "Affiche la page d'aide")
        .addField(">=aide <nom de la commande>", "Affiche la page d'aide spécifique à la commande (en développement!!!)")
        .addField(">=version", "Affiche la version du bot")
        .addField(">=legion", "Donne la liste des membres de la Légion")
        .addField(">=nrinjade", "Donne des portraits de Nrinjade,(en développement!!!)")
        .addField(">=provincesliste","Affiche la liste des provinces du Kastelpônten,")
        .addField(">=carte", "Affiche la carte")
        .setFooter("Sielte, L&D, Nrinjade, Nrscist: --Menu d'aide-- --Depuis 2018--")
        message.channel.sendMessage(help_embed);
        console.log("Nrinjade III récite la page d'aide")
    }}}}}}}}}});
