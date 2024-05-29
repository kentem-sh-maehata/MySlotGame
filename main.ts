{
  const stop1 = document.getElementById("stop1");
  const stop2 = document.getElementById("stop2");
  const stop3 = document.getElementById("stop3");
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");
  const slots = document.querySelectorAll(".slot-area img");
  console.log(slots)

  let intervalId1: NodeJS.Timeout,
    intervalId2: NodeJS.Timeout,
    intervalId3: NodeJS.Timeout;

  let slotCount = 0;

  if (
    !slot1 ||
    !("src" in slot1) ||
    !slot2 ||
    !("src" in slot2) ||
    !slot3 ||
    !("src" in slot3)
  )
    throw new Error();

  const spin = document.getElementById("spin");
  const imgs = ["cherry", "bell", "seven"];

  spin?.addEventListener("click", () => {
    // ボタンを押せるように、押せないように
    spin.classList.add("disabled");
    stop1?.classList.remove("disabled");
    stop2?.classList.remove("disabled");
    stop3?.classList.remove("disabled");
    slots.forEach((slot)=>{
      if("style" in slot && slot.style !== undefined && slot.style !== null && "opacity" in slot.style)
      slot.style.opacity = 1;
    })

    // スロットを回す
    intervalId1 = setInterval(() => {
      let randomIdx = Math.floor(Math.random() * 3);
      if ("src" in slot1) slot1.src = "img/" + imgs[randomIdx] + ".png";
    }, 10);
    intervalId2 = setInterval(() => {
      let randomIdx = Math.floor(Math.random() * 3);
      if ("src" in slot2) slot2.src = "img/" + imgs[randomIdx] + ".png";
    }, 10);
    intervalId3 = setInterval(() => {
      let randomIdx = Math.floor(Math.random() * 3);
      if ("src" in slot3) slot3.src = "img/" + imgs[randomIdx] + ".png";
    }, 10);
  });

  function finishGame() {
    spin?.classList.remove("disabled");
    slotCount = 0;

    let cherryCnt = 0;
    let bellCnt = 0;
    let sevenCnt = 0;
    
    slots.forEach((slot) => {
      let imgSrc;
      if ("src" in slot) {
        imgSrc = slot.src?.toString();
        // console.log(imgSrc)
        if (imgSrc?.includes("cherry")) {
          cherryCnt++;
          console.log("cherry!",cherryCnt);
        }
        if (imgSrc?.includes("bell")) {
          bellCnt++;
          console.log("bell!",bellCnt);
        }
        if (imgSrc?.includes("seven")) {
          sevenCnt++;
          console.log("seven!",sevenCnt);
        }
      }
    });
    const Counts = [cherryCnt, bellCnt, sevenCnt];
    let maxIdx = -1
    let maxNum = 0
    let maxNumCnt = 0
    if(!(Counts[0] === Counts[1]) && !(Counts[1] === Counts[2])){
      for(let i=0;i<Counts.length;i++){
        if(Counts[i] > maxNum){
          maxNum = Counts[i]
          maxIdx = i
          maxNumCnt ++
        }
      }
      console.log(imgs[maxIdx])
      slots.forEach((slot)=>{
        if ("src" in slot && "style" in slot) {
          if (typeof slot.src === "string") {
            if (slot.style && !(slot.src.includes(imgs[maxIdx]))) {
              slot.style.opacity = 0.5; // 透明度を50%に設定
            }
          }
        }
      })
    }

    // それぞれの画像の枚数をカウントする
    // 最も多い画像の名称を取得
    // 画像の名前が↑でなければ透明度を付与
  }

  stop1?.addEventListener("click", () => {
    stop1.classList.add("disabled");
    clearInterval(intervalId1);
    slotCount++;
    if (slotCount === 3) {
      finishGame();
    }
  });
  stop2?.addEventListener("click", () => {
    stop2.classList.add("disabled");
    clearInterval(intervalId2);
    slotCount++;
    if (slotCount === 3) {
      finishGame();
    }
  });
  stop3?.addEventListener("click", () => {
    stop3.classList.add("disabled");
    clearInterval(intervalId3);
    slotCount++;
    if (slotCount === 3) {
      finishGame();
    }
  });
}
