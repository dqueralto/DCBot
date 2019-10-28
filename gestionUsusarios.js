const func = require("./funciones.js");

module.exports = {
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
                func.borrado(ms,0);
                func.mute(ms,true);
                break;   

            case "dmt"://desmuteo
                func.borrado(ms,0);
                func.mute(ms,false);
                break;   

            default:

                break;
        }
    }

}