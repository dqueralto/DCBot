const gc = require("./gestionChats.js");
const func = require("./funciones.js");

module.exports = {
    gestionUsuarios: function(ms,args,comando)
    {
        switch (comando) {
            case "ban"://baneo, expulsa del server
                try{
                    gc.borrado(ms,0);
                    let mencionado = ms.mentions.users.first();
                    let razon = args.slice(1).join(' ');

                    if(!mencionado) return ms.reply('No ha mencionando a ningún miembro.');
                    if(!razon) return ms.channel.send('Escriba una razón del uso de ban.');

                    ms.guild.member(mencionado).ban(razon);
                    ms.channel.send(`**${mencionado.username}**, fue baneado del servidor, razón: ${razon}.`);
                }catch(err){
                    console.log(err+"\n ");
                }
                break;

            case "mt"://muteo
                gc.borrado(ms,0);
                this.mute(ms,true);
                break;   

            case "dmt"://desmuteo
                gc.borrado(ms,0);
                this.mute(ms,false);
                break;   

            default:

                break;
        }
    },
    
    mute:function(ms,estado) {
        try{
            let miembro = ms.mentions.members.first();
            let nombrerol = "Muteado";

            let role = ms.guild.roles.find(r => r.name === nombrerol);
            let perms = ms.member.hasPermission("MANAGE_ROLES");

            if(!perms) return ms.channel.send("No tienes permisos suficientes, para agregar roles.");
            if(!miembro) return ms.reply('Debe mencionar a un miembro.');
            if(!role) return ms.channel.send('Rol no encontrado en el servidor.');

            miembro.removeRole(role).catch(console.error);
            miembro.setMute(estado);
            
        }catch(err){
            console.log(err.stack);
        }
    }

}