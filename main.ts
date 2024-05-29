{
  const stop1 = document.getElementById('stop1')
  const stop2 = document.getElementById('stop2')
  const stop3 = document.getElementById('stop3')
  const spin = document.getElementById('spin')

  spin?.addEventListener('click',()=>{
    // ボタンを押せるように、押せないように
    spin.classList.add('disabled')
    stop1?.classList.remove('disabled')
    stop2?.classList.remove('disabled')
    stop3?.classList.remove('disabled')
  })
}