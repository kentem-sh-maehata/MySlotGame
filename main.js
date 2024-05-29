"use strict";
{
    const stop1 = document.getElementById('stop1');
    const stop2 = document.getElementById('stop2');
    const stop3 = document.getElementById('stop3');
    const spin = document.getElementById('spin');
    spin === null || spin === void 0 ? void 0 : spin.addEventListener('click', () => {
        // ボタンを押せるように、押せないように
        spin.classList.add('disabled');
        stop1 === null || stop1 === void 0 ? void 0 : stop1.classList.remove('disabled');
        stop2 === null || stop2 === void 0 ? void 0 : stop2.classList.remove('disabled');
        stop3 === null || stop3 === void 0 ? void 0 : stop3.classList.remove('disabled');
    });
}
