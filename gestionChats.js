const cnv = require("./conversaciones.js");

module.exports = {
    
    gestionChats: function(ms,args,comando)
    {
        switch (comando) {
            case "del"://borra un numero de filas del chat de texto
                func.borrado(ms,args[0])//pasamos el primer argumento que es el nº de mendajes a borrar
                break;

            case "ms"://el bot dice algo por ti a alguien
                    try{
                        func.borrado(ms,0);
                        let usuario = ms.mentions.members.first();
                        let mensaje = args.join(" ");
                        ms.channel.send(`**${usuario.username}**, ${mensaje}`);
                    }catch(err){
                        console.log(err+"\n");
                    }
                    break;

            case "msp"://manda mensajes privados mediante el bot
                    try{
                        func.borrado(ms,0);
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
                cnv.charleta(ms,comando);
                break;
        }
    }
}