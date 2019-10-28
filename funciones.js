module.exports = {
    
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
    },
    
    borrado: function(ms,args=1){
        try{
            let cantidad = parseInt(args)+1;
            ms.channel.bulkDelete(cantidad);
        }catch(err){
            console.log(err+"\nInserte el numeró de lineas a borrar");
        }
    }






};
