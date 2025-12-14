let index = 0;
let music = document.getElementById("bgmusic");

const pages = [
  {photo:'photo1.jpg', text:'🎂 Tum meri zindagi ka sabse khoobsurat hissa ho,<br>Har pal tumhari yaadon se roshan hota hai…'},
  {photo:'photo2.jpg', text:'🎈 Tumhari muskaan meri duniya ka noor hai,<br>Tumhari khushi meri duaon ka surur hai…'},
  {photo:'photo3.jpg', text:'💐 Har din tumse aur zyada mohabbat hoti hai,<br>Tum meri zindagi ka sabse khoobsurat ehsaas ho…'},
  {photo:'photo4.jpg', text:'💖 Tere bina dil ko sukoon nahi milta,<br>Tum meri mohabbat ka sabse khoobsurat silsila hai…'},
  {photo:'photo5.jpg', text:'🎉 Happy Birthday meri Asrin,<br>Tum meri zindagi ka sabse khoobsurat tohfa ho ❤️'},
  {photo:null, text:'❤️ Thank you meri life me aane ke liye,<br>Tum meri duaon ka sabse khoobsurat jawaab ho ❤️<br><span class="signature">— 💌 From your husband</span>'}
];

let bgIndex = 0;
let bgInterval = null;

function openGift(){
  document.querySelector('.gift-box').classList.add('open');

  music.volume = 0.4;
  music.play();

  document.getElementById("nextBtn").style.display = "inline-block";
  showNext();

  if(!bgInterval){
    startBackground();
  }
}

function showNext(){
  if(index >= pages.length){
    document.getElementById("nextBtn").style.display = "none";
    launchConfetti();   // 🎉 CONFETTI HERE
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  if(pages[index].photo){
    card.innerHTML = `
      <div class="photo-box">
        <img src="static/${pages[index].photo}">
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

/* 🌄 Background slideshow */
function startBackground(){
  document.body.style.backgroundImage = "url(static/" + pages[0].photo + ")";
  bgInterval = setInterval(()=>{
    bgIndex = (bgIndex + 1) % 5;
    document.body.style.backgroundImage =
      "url(static/" + pages[bgIndex].photo + ")";
  }, 3500);
}

/* 🎉 CONFETTI EFFECT */
function launchConfetti(){
  for(let i=0;i<80;i++){
    let c = document.createElement("div");
    c.innerHTML = "🎉";
    c.style.position = "fixed";
    c.style.left = Math.random()*100 + "%";
    c.style.top = "-10px";
    c.style.fontSize = "22px";
    c.style.animation = "fall 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}
