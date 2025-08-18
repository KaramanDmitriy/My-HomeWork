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

  const modal = document.createElement('div');
  modal.id = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal-title';

  const modalAudio = document.createElement('audio');
  modalAudio.controls = true;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Закрити';
  closeButton.onclick = () => {
    modal.style.display = 'none';
    modalAudio.pause();
  };

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalAudio);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
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

  const openButton = document.createElement("button");
  openButton.textContent = "Відкрити";
  openButton.onclick = () => {
    const modal = document.getElementById('modal');
    modal.querySelector('.modal-title').textContent = song.title;
    modal.querySelector('audio').src = song.url;
    modal.style.display = 'flex';
    modal.querySelector('audio').play();
  };

  songElement.appendChild(title);
  songElement.appendChild(audio);
  songElement.appendChild(openButton);
  document.getElementById("playlist").appendChild(songElement);
});
