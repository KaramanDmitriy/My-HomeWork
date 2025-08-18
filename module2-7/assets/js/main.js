(function () {
  const container = document.createElement('div');
  container.className = 'container';

  const heading = document.createElement('h1');
  heading.textContent = '🎵 Мій плейлист';

  const playlist = document.createElement('div');
  playlist.id = 'playlist';
  playlist.className = 'playlist';

  container.appendChild(heading);
  container.appendChild(playlist);

  document.body.appendChild(container);
})();

const songs = [
  {
    title: "Imagine Dragons – Believer",
    url: "assets/music/imagine-dragons-believer-(meloua.com).mp3"
  },
  { 
    title: "Glass Animals - Heat Waves",
    url: "assets/music/glass-animals-heat-waves-(meloua.com).mp3"
  },
  {
    title: "VAN LIULENOV, DAMNITSKYI - ШОВКОВИЦЯ",
    url: "assets/music/ivan-liulenov-damnitskyi-shovkovitsya-(meloua.com).mp3" 
  },
  {
    title: "Sadsvit-Kaseta",
    url: "assets/music/1694325604_sadsvit-kaseta.mp3" 
  },
  {
    title: "Foo Fighters - Today's Song",
    url: "assets/music/1752413567_foo-fighters-todays-song.mp3" 
  },
  {
    title: "Drevo-Smaragdove-nebo",
    url: "assets/music/drevo-smaragdove-nebo-(meloua.com).mp3" 
  }

];

songs.forEach(song => {
  const songElement = document.createElement("div");
  songElement.className = "song";

  const title = document.createElement("div");
  title.className = "song-title";
  title.textContent = song.title;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = song.url;

  songElement.appendChild(title);
  songElement.appendChild(audio);
  document.getElementById("playlist").appendChild(songElement);
});
