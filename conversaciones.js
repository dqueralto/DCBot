const func = require("./funciones.js");

module.exports = {

    charleta: function (ms) 
    {
        var mensaje = ms.content.slice(1);
        
        if (mensaje ==  "ping") {
            ms.channel.send("pong!");
        } else
        if (mensaje ==  "hola") {
            
            ms.channel.send("Hola que tal?");
        }else
        if (mensaje ==  "bien") {
            ms.channel.send("Me alegro por ti");
        }else
        if (mensaje ==  "mal") {
            ms.channel.send("Pues te jodes");
        }
    }
}