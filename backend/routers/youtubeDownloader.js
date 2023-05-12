
const ytdl = require('ytdl-core');
const fs = require('fs');

const youtubeDownloader = (videoUrl, cb) => {
    ytdl.getInfo(videoUrl)
      .then((info) => {
        const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
        const selectedFormat = ytdl.chooseFormat(videoFormats, { quality: 'highest' });
        const fileName = `${info.videoDetails.title}.${selectedFormat.container}`;
        const filePath = `static/uploads/${fileName}`;
        
        ytdl(videoUrl, { format: selectedFormat })
          .pipe(fs.createWriteStream(filePath))
          .on('finish', () => {
            console.log('Video downloaded successfully!');
            cb(fileName);
          })
          .on('error', (err) => {
            console.error('Error downloading video:', err);
          });
      })
      .catch((err) => {
        console.error('Error getting video information:', err);
      });
  };

// youtubeDownloader('https://www.youtube.com/watch?v=V4gGJ7XXlC0');

module.exports = youtubeDownloader;