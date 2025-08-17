// Плейлист з назвою та посиланням на аудіо
const songs = [
  {
    title: "Imagine Dragons – Believer",
    url: "../music/imagine-dragons-believer-(meloua.com).mp3"
  },
  { 
    title: "Glass Animals - Heat Waves",
    url: "../music/glass-animals-heat-waves-(meloua.com).mp3"
  },
  {
    title: "VAN LIULENOV, DAMNITSKYI - ШОВКОВИЦЯ",
    url: "../music/ivan-liulenov-damnitskyi-shovkovitsya-(meloua.com).mp3" 
  },
  {
    title: "Sadsvit-Kaseta",
    url: "../music/1694325604_sadsvit-kaseta.mp3" 
  },
  {
    title: "Foo Fighters - Today's Song",
    url: "../music/1752413567_foo-fighters-todays-song.mp3" 
  },
  {
    title: "Drevo-Smaragdove-nebo",
    url: "../music/drevo-smaragdove-nebo-(meloua.com).mp3" 
  }

];

// Контейнер для плейлиста
const playlistContainer = document.getElementById("playlist");

// Генерація елементів DOM
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
  playlistContainer.appendChild(songElement);
});
