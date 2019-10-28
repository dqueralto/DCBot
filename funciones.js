module.exports = {

    charleta: function (ms,comando) 
    {
        if (comando ==  "ping") {
            ms.channel.send("pong!");
        } else
        if (comando ==  "hola") {
            ms.channel.send("Hola que tal?");
        }else
        if (comando ==  "bien") {
            ms.channel.send("Me alegro por ti");
        }else
        if (comando ==  "mal") {
            ms.channel.send("Pues te jodes");
        }
    },

    gestionChats: function(ms,args,comando)
    {
        switch (comando) {
            case "del"://borra un numero de filas del chat de texto
                try{
                    let cantidad = parseInt(args[0])+1;
                    ms.channel.bulkDelete(cantidad);
                }catch(err){
                    console.log(err+"\nInserte el numeró de lineas a borrar");
                }
                break;

            case "ms"://el bot dice algo por ti a alguien
                    try{
                        let mensaje = args.join(" ");
                        ms.channel.send(`**${mencionado.username}**, ${mensaje}`);
                    }catch(err){
                        console.log(err+"\n");
                    }
                    break;

            case "msp"://manda mensajes privados mediante el bot
                    try{
                        let mensaje = args.join(" ");
                        if(!mensaje) return ms.channel.send(`Escriba un mensaje para enviartelo por privado.`);
                        
                        ms.author.send(mensaje);
                    }catch(err){
                        console.log(err+"\n ");
                    }


            default:
                this.charleta(ms,comando);
                break;
        }
    },

    gestionUsuarios: function(ms,args,comando)
    {
        switch (comando) {
            case "ban"://baneo, expulsa del server
                try{
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
                try{
                    let miembro = ms.mentions.members.first();
                    let nombrerol = "Muteado";

                    let role = ms.guild.roles.find(r => r.name === nombrerol);
                    let perms = ms.member.hasPermission("MANAGE_ROLES");

                    if(!perms) return ms.channel.send("No tienes permisos suficientes, para agregar roles.");
                    if(!miembro) return ms.reply('Debe mencionar a un miembro.');
                    if(!role) return ms.channel.send('Rol no encontrado en el servidor.');

                    miembro.addRole(role).catch(console.error);
                    miembro.setMute(true);
                    
                }catch(err){
                    console.log(err.stack);
                }
                break;   

                case "dmt"://desmuteo
                        try{
                            let miembro = ms.mentions.members.first();
                            let nombrerol = "Muteado";
        
                            let role = ms.guild.roles.find(r => r.name === nombrerol);
                            let perms = ms.member.hasPermission("MANAGE_ROLES");
        
                            if(!perms) return ms.channel.send("No tienes permisos suficientes, para agregar roles.");
                            if(!miembro) return ms.reply('Debe mencionar a un miembro.');
                            if(!role) return ms.channel.send('Rol no encontrado en el servidor.');
        
                            miembro.removeRole(role).catch(console.error);
                            miembro.setMute(false);
                            
                        }catch(err){
                            console.log(err.stack);
                        }
                        break;   


            default:

                break;
        }
    }






};
