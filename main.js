"use strict";
{
    const stop1 = document.getElementById('stop1');
    const stop2 = document.getElementById('stop2');
    const stop3 = document.getElementById('stop3');
    // const slot1 = document.getElementById('slot1')
    // const slot2 = document.getElementById('slot2')
    // const slot3 = document.getElementById('slot3')
    const slots = document.querySelectorAll(".slot-area img");
    console.log(slots);
    // if(!slot1 || !("src" in slot1) || !slot2 || !("src" in slot2) || !slot3 || !("src" in slot3))
    //   throw new Error();
    const spin = document.getElementById('spin');
    const imgs = ["img/cherry.png", "img/bell.png", "img/seven.png"];
    spin === null || spin === void 0 ? void 0 : spin.addEventListener('click', () => {
        // ボタンを押せるように、押せないように
        spin.classList.add('disabled');
        stop1 === null || stop1 === void 0 ? void 0 : stop1.classList.remove('disabled');
        stop2 === null || stop2 === void 0 ? void 0 : stop2.classList.remove('disabled');
        stop3 === null || stop3 === void 0 ? void 0 : stop3.classList.remove('disabled');
        // スロットを回す
        const intervalId = setInterval(() => {
            slots.forEach((slot) => {
                let randomIdx = Math.floor(Math.random() * 3);
                if ("src" in slot)
                    slot.src = imgs[randomIdx];
            });
        }, 10);
    });
}
