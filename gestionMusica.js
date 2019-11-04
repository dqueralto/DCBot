const config = require("./config.json");
const YouTube = require("discord-youtube-api");
const youtube = YouTube(config.YT_API_token);

youtube.getPlaylist('https://www.youtube.com/playlist?list=PL2BN1Zd8U_MsyMeK8r9Vdv1lnQGtoJaSa')
    .then(playlist => {
        console.log(`The playlist's title is ${playlist.title}`);
        playlist.getVideos()
            .then(videos => {
                console.log(`This playlist has ${videos.length === 50 ? '50+' : videos.length} videos.`);
            })
            .catch(console.log);
    })
    .catch(console.log);

youtube.searchVideos('Centuries', 4)
    .then(results => {
        console.log(`The video's title is ${results[0].title}`);
    })
    .catch(console.log);

youtube.getVideo('https://www.youtube.com/watch?v=3odIdmuFfEY')
.then(video => {
    console.log(`The video's title is ${video.title}`);
})
.catch(console.log);

module.exports = {

}