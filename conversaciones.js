const func = require("./funciones.js");

module.exports = {

    charleta: function (ms) 
    {
        var mensaje = ms.content.slice(1);
        
        if (mensaje ==  "ping") {
            ms.channel.send("pong!");
        } else
        if (mensaje ==  "hola") {
            ms.channel.send("Hola, ¿que tal?");
        }else
        if (mensaje ==  "adios") {
            ms.channel.send("Adios");
        }else 
        if (mensaje ==  "bien") {
            ms.channel.send("Me alegro por ti");
        }else
        if (mensaje ==  "aqui vamon") {
            ms.channel.send("Pues te jodes");
        }else
        if (mensaje ==  "hijo de puta") {
            ms.channel.send("¡Tus muertos!");
        }
    }
}