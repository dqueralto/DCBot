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
                this.borrado(ms,args[0])//pasamos el primer argumento que es el nº de mendajes a borrar
                break;

            case "ms"://el bot dice algo por ti a alguien
                    try{
                        this.borrado(ms,0);
                        let usuario = ms.mentions.members.first();
                        let mensaje = args.join(" ");
                        ms.channel.send(`**${usuario.username}**, ${mensaje}`);
                    }catch(err){
                        console.log(err+"\n");
                    }
                    break;

            case "msp"://manda mensajes privados mediante el bot
                    try{
                        this.borrado(ms,0);
                        let usuario = ms.mentions.members.first();
                        if(!usuario) return ms.channel.send(`indica un usuario.`);

                        let mensaje = args.join(" ");
                        if(!mensaje) return ms.channel.send(`Escriba un mensaje para enviartelo por privado.`);

                        usuario.send(mensaje);
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
                    this.borrado(ms,0);
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
                this.borrado(ms,0);
                this.mute(ms,true);
                break;   

            case "dmt"://desmuteo
                this.borrado(ms,0);
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
