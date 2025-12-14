let index = 0;

/* 🎵 Music (mobile safe) */
const music = document.getElementById("bgmusic");

/* 📖 Pages */
const pages = [
  {photo:'photo1.jpg', text:'🎂 Tum meri zindagi ka sabse khoobsurat hissa ho,<br>Har pal tumhari yaadon se roshan hota hai…'},
  {photo:'photo2.jpg', text:'🎈 Tumhari muskaan meri duniya ka noor hai,<br>Tumhari khushi meri duaon ka surur hai…'},
  {photo:'photo3.jpg', text:'💐 Har din tumse aur zyada mohabbat hoti hai,<br>Tum meri zindagi ka sabse khoobsurat ehsaas ho…'},
  {photo:'photo4.jpg', text:'💖 Tere bina dil ko sukoon nahi milta,<br>Tum meri mohabbat ka sabse khoobsurat silsila hai…'},
  {photo:'photo5.jpg', text:'🎉 Happy Birthday meri Asrin,<br>Tum meri zindagi ka sabse khoobsurat tohfa ho ❤️'},
  {
    photo:null,
    text:'❤️ Thank you meri life me aane ke liye,<br>Tum meri duaon ka sabse khoobsurat jawaab ho ❤️<br><span class="signature">— 💌 From your husband</span>'
  }
];

let bgIndex = 0;
let bgInterval = null;

/* 🎁 OPEN GIFT (JPG SAFE + ONE TIME) */
function openGift(){
  const giftBox = document.querySelector('.gift-box');

  if(giftBox.classList.contains('open')) return; // double click fix
  giftBox.classList.add('open');

  /* 🎵 Music play (mobile safe) */
  music.volume = 0.4;
  music.play().catch(()=>{});

  document.getElementById("nextBtn").style.display = "inline-block";
  showNext();

  if(!bgInterval){
    startBackground();
  }
}

/* ▶️ NEXT STORY */
function showNext(){
  if(index >= pages.length){
    document.getElementById("nextBtn").style.display = "none";
    launchConfetti();
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  if(pages[index].photo){
    card.innerHTML = `
      <div class="photo-box">
        <img src="static/${pages[index].photo}" alt="Memory">
      </div>
      <div class="text-box">${pages[index].text}</div>
    `;
  } else {
    card.innerHTML = `
      <div class="text-box">${pages[index].text}</div>
    `;
  }

  document.getElementById("storyContainer").appendChild(card);
  index++;
}

/* 🌄 BACKGROUND SLIDESHOW */
function startBackground(){
  document.body.style.backgroundImage = "url(static/" + pages[0].photo + ")";
  bgInterval = setInterval(()=>{
    bgIndex = (bgIndex + 1) % 5;
    document.body.style.backgroundImage =
      "url(static/" + pages[bgIndex].photo + ")";
  }, 3500);
}

/* 🎉 CONFETTI */
function launchConfetti(){
  for(let i=0;i<80;i++){
    const c = document.createElement("div");
    c.innerHTML = "🎉";
    c.style.position = "fixed";
    c.style.left = Math.random()*100 + "%";
    c.style.top = "-10px";
    c.style.fontSize = "22px";
    c.style.pointerEvents = "none";
    c.style.animation = "fall 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(), 3000);
  }
}
