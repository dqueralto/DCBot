const Discord = require('discord.js');
const config = require("./config.json");
const func = require("./funciones.js");
const gc = require("./gestionChats.js");
const gu = require("./gestionUsusarios.js");
const cnv = require("./conversaciones.js");

const bot = new Discord.Client();


var token = config.token;
var prefix = config.prefix;






bot.on('ready', () => {
    console.log("Conectado como "+bot.user.tag);
    bot.user.setActivity("ser Dios");
  

});

bot.on("guildMemberAdd", (member) => {
    let canal = client.channels.get('ID-CANAL'); 
    canal.send(`Hola ${member.user}, bienvenido al servidor ${member.guild.name} pasalo bien!.`);
   
});


bot.on("message", (message) => {

    //separamos el comando de los argumentos y del prefijo
    const args = message.content.slice(prefix.length).trim().split(/ +/g); 
    const command = args.shift().toLowerCase();
    

    let rol = message.guild.roles.find(r => r.name === "DIOS");//rastreamos el rol "DIOS" (el rol deseado)
    if(!rol) {
        message.channel.send('Rol no encontrado en el servidor.');

    } else{
        if(message.member.roles.has(rol.id)) {
            //message.channel.send('Si tienes el rol: `'+rol.name+'`.');
            gc.gestionChats(message,args,command); 
            gu.gestionUsuarios(message,args,command); 

        } else {
            //message.channel.send('No tienes el rol: `'+rol.name+'`.');

            cnv.charleta(message,command);
        };
    };


});

//Controlador de errores
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));


bot.login(token);


