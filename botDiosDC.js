const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
//const args = message.content.slice(prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();



var token = config.token;
var prefix = config.prefix;

function comprobRol() 
{
    let rol = message.guild.roles.find(r => r.name === "Administrador");
    if(!rol) {
        message.channel.send('Rol no encontrado en el servidor.');

    } else{
        if(message.member.roles.has(rol.id)) {
        message.channel.send('Si tienes el rol: `'+rol.name+'`.');

        } else {
        message.channel.send('No tienes el rol: `'+rol.name+'`.');

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
    

    let rol = message.guild.roles.find(r => r.name === "DIOS");
    if(!rol) {
        message.channel.send('Rol no encontrado en el servidor.');

    } else{
        if(message.member.roles.has(rol.id)) {
        //message.channel.send('Si tienes el rol: `'+rol.name+'`.');

            if (command ===  "del") 
            {
                try{
                    let cantidad = parseInt(args[0]);
                    message.channel.bulkDelete(cantidad);
                }catch(err){
                    console.log(err+"\nInserte el numeró de lineas a borrar");
                }
            }

            

        } else {
        //message.channel.send('No tienes el rol: `'+rol.name+'`.');

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
            }



        };
    };







});


bot.login(token);


