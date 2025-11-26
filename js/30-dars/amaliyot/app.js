  const surahInput = document.getElementById("surahInput");
  const loadSurah = document.getElementById("loadSurah");
  const showAllSurahs = document.getElementById("showAllSurahs");
  const contentArea = document.getElementById("contentArea");

  const Api = "https://api.alquran.cloud/v1";
  const AUDIO_EDITION = "ar.alafasy";
  const TEXT_EDITION = "quran-simple";

  let numberSerach = 0

  async function fetchSurah(surahNumber) {
    try {
      contentArea.innerHTML = `<div class="loading">Yuklanyapti ...</div>`;

      const [textResponse, audioResponse] = await Promise.all([
        fetch(`${Api}/surah/${surahNumber}/${AUDIO_EDITION}`),
        fetch(`${Api}/surah/${surahNumber}/${TEXT_EDITION}`),
      ]);

      if (!textResponse.ok || !audioResponse.ok) {
        throw new Error("Malumotlar olishda xatolik mavjud");
      }

      const textdata = await textResponse.json();
      const audiodata = await audioResponse.json();

      contentArea.innerHTML = `
          <div class = "surah-info">
          <h2>${textdata.data.name} - ${textdata.data.englishName}</h2>
          <p>${textdata.data.englishNameTranslation} | ${textdata.data.numberOfAyahs} oyat | ${textdata.data.revelationType}</p>
          </div>
          `;

      const surah_list = document.createElement("ul");
      surah_list.classList = "ayah-list";
      contentArea.append(surah_list);

      textdata.data.ayahs.forEach((el) => {
        const li = document.createElement("li");
        li.classList = "ayah-item";
        li.innerHTML = `
                <span class="ayah-number">${el.numberInSurah}</span>
                <div class="ayah-text">${el.text}</div>
                <div class="audio-controls">
                  <button class="play-btn">🔊 Tinglash</button>
                  <audio src="${el.audio}" preload="none"></audio>
                </div>
              `;
        surah_list.append(li);
      });

      let currentAudio = null;

      document.querySelectorAll(".play-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const audio = btn.nextElementSibling;

          if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
          }

          if (audio.paused) {
            audio.play();
            currentAudio = audio;
          } else {
            audio.pause();
            audio.currentTime = 0;
            currentAudio = null;
          }
        });
      });
    } catch (err) {
      contentArea.innerHTML = `<div class="error">Malumot yuklanishda ${err.message} xatolik mavjud </div>`;
    }
  }



  loadSurah.addEventListener("click", () => {
    const surahNumber = surahInput.value;
    if (surahNumber <= 0 || surahNumber > 114) {
      contentArea.innerHTML = "<div class='error'>Noto'g'ri sura raqami(1-114)</div>";
      return;
  }
    if (surahNumber == "") fetchSurah(1)
    if (surahNumber) fetchSurah(surahNumber);
  });

  async function showAll() {
    const sheel = await fetch(`${Api}/surah`);
    const surahdata = await sheel.json();
    
    showAllSurahs.addEventListener("click", () => {
      contentArea.innerHTML = "";
      const newDiv = document.createElement("div");
      newDiv.classList = "surah-list";
      contentArea.append(newDiv);

      surahdata.data.forEach((el) => {
        const childDiv = document.createElement("div");
        childDiv.classList = "surah-card";
        childDiv.innerHTML = `
          <h3>${el.name}</h3>
          <p>${el.englishName}</p>
          <p>${el.englishNameTranslation}</p>
          <p>${el.numberOfAyahs} oyat</p>
          `;
        newDiv.append(childDiv);

        childDiv.addEventListener("click",()=>{
            surahInput.value = el.number
            fetchSurah(el.number)

        })
      });
    });

    
    
  }

  fetchSurah(1);

  showAll();

