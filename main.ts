{
  const stop1 = document.getElementById('stop1')
  const stop2 = document.getElementById('stop2')
  const stop3 = document.getElementById('stop3')
  const slot1 = document.getElementById('slot1')
  const slot2 = document.getElementById('slot2')
  const slot3 = document.getElementById('slot3')
  
  let intervalId1:NodeJS.Timeout
  let intervalId2:NodeJS.Timeout
  let intervalId3:NodeJS.Timeout
  let slotCount = 0

  if(!slot1 || !("src" in slot1) || !slot2 || !("src" in slot2) || !slot3 || !("src" in slot3))
    throw new Error();

  const spin = document.getElementById('spin')
  const imgs = ["img/cherry.png","img/bell.png","img/seven.png"]

  spin?.addEventListener('click',()=>{
    // ボタンを押せるように、押せないように
    spin.classList.add('disabled')
    stop1?.classList.remove('disabled')
    stop2?.classList.remove('disabled')
    stop3?.classList.remove('disabled')

    // スロットを回す
    intervalId1 = setInterval(()=>{
      let randomIdx = Math.floor(Math.random() * 3)
      if("src" in slot1)
        slot1.src = imgs[randomIdx]
    },10)
    intervalId2 = setInterval(()=>{
      let randomIdx = Math.floor(Math.random() * 3)
      if("src" in slot2)
        slot2.src = imgs[randomIdx]
    },10)
    intervalId3 = setInterval(()=>{
      let randomIdx = Math.floor(Math.random() * 3)
      if("src" in slot3)
        slot3.src = imgs[randomIdx]
    },10)
  })

  stop1?.addEventListener('click',()=>{
    stop1.classList.add("disabled")
    clearInterval(intervalId1)
    slotCount ++
    if(slotCount === 3){
      spin?.classList.remove('disabled')
      slotCount = 0
    }
  })
  stop2?.addEventListener('click',()=>{
    stop2.classList.add("disabled")
    clearInterval(intervalId2)
    slotCount ++
    if(slotCount === 3){
      spin?.classList.remove('disabled')
      slotCount = 0
    }
  })
  stop3?.addEventListener('click',()=>{
    stop3.classList.add("disabled")
    clearInterval(intervalId3)
    slotCount ++
    if(slotCount === 3){
      spin?.classList.remove('disabled')
      slotCount = 0
    }
  })
}