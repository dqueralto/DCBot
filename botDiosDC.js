const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
//const args = message.content.slice(prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();



var token = config.token;
var prefix = config.prefix;

function comprobRol() 
{
    let rol = message.guild.roles.find(r => r.name === "DIOS");
    if(!rol) {
        message.channel.send('Rol no encontrado en el servidor.');
        return false;
    } else{
        if(message.member.roles.has(rol.id)) {
        ///message.channel.send('Si tienes el rol: `'+rol.name+'`.');
            return true;
        } else {
        //message.channel.send('No tienes el rol: `'+rol.name+'`.');
            return false;
        };
    };
}

bot.on('ready', () => {
    console.log("Conectado como "+bot.user.tag);
    bot.user.setActivity("ser Dios");
  

});



bot.on("message", (message) => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (comprobRol) {
        if (command ==  "ping") {
            message.channel.send("pong!");
        } else
        if (command ==  "hola") {
            message.channel.send("Hola que tal?");
        }else
        if (command ==  "bien") {
            message.channel.send("Me alegro por ti");
        }else
        if (command ==  "mal") {
            message.channel.send("Pues te jodes");
        }else
        if (command ===  "del") {
            let cantidad = parseInt(args[0]);
            message.channel.bulkDelete(cantidad);
        }
    }





});


bot.login(token);


