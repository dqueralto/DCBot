const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
//const args = message.content.slice(prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();



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

            if (command ===  "del") 
            {
                try{
                    let cantidad = parseInt(args[0]);
                    message.channel.bulkDelete(cantidad);
                }catch(err){
                    console.log(err+"\nInserte el numeró de lineas a borrar");
                }
            }
            if (command ===  "mut") 
            {
                try{
                    let cantidad = parseInt(args[0]);
                    message.channel.bulkDelete(cantidad);
                }catch(err){
                    console.log(err+"\n ");
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

//Controlador de errores
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));


bot.login(token);


