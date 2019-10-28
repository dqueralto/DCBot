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
    }
}