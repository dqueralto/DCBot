const Discord = require('discord.js');
const config = require("./config.json");
const func = require("./funciones.js");
const gc = require("./gestionChats.js");
const gu = require("./gestionUsusarios.js");
const cnv = require("./conversaciones.js");
const bot = new Discord.Client();


var token = config.token;
var pc = config.prefixC;
var pgu = config.prefixGU;
var myId = config.IdOwner;
var canalTextGen = config.IdCanalTextoGeneral


bot.on('ready', () => {
    console.log("Conectado como "+bot.user.tag);
    bot.user.setActivity("ser Dios");
  

});

bot.on("guildMemberAdd", (member) => {
    let canal = client.channels.get(canalTextGen); 
    canal.send(`Hola ${member.user}, bienvenido al servidor ${member.guild.name} pasalo bien!.`);
   
});

//Controlador de errores
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

//control de mensajes
bot.on("message", (message) => {

    //separamos el comando de los argumentos y del prefijo
    const args = message.content.slice(1).trim().split(/ +/g); 
    const command = args.shift().toLowerCase();
    const activador = message.content.substr(0,1);
    
    if (message.author.avatar === myId) 
    {
        if (activador === pc) 
        {
            cnv.charleta(message);
            
        
        }else if (activador === pgu) 
        {
            gc.gestionChats(message,args,command);
            gu.gestionUsuarios(message,args,command); 
        
        }
    } else 
    {
        let rol = message.guild.roles.find(r => r.name === "Mortales");//rastreamos el rol "DIOS" (el rol deseado)
        if(!rol) {
            message.channel.send('Rol no encontrado en el servidor.');

        } else{
            if(message.member.roles.has(rol.id)) {
                //message.channel.send('Si tienes el rol: `'+rol.name+'`.');
                
                if (activador === pc) 
                {
                    cnv.charleta(message);
                    //gc.gestionChats(message,args,command);
                
                }/*else if (activador === pgu) 
                {
                    //gu.gestionUsuarios(message,args,command); 
                
                }*/

            } else {

                //message.channel.send('No tienes el rol: `'+rol.name+'`.');
                /*
                if (activador === pc) 
                {
                    cnv.charleta(message);
                
                }
                */
            };
        };

    }



});



bot.login(token);


