"use strict";
{
    const stop1 = document.getElementById("stop1");
    const stop2 = document.getElementById("stop2");
    const stop3 = document.getElementById("stop3");
    const slots = document.querySelectorAll(".slot-area img");
    let intervalId1, intervalId2, intervalId3;
    let slotCount = 0;
    if (!slots[0] ||
        !("src" in slots[0]) ||
        !slots[1] ||
        !("src" in slots[1]) ||
        !slots[2] ||
        !("src" in slots[2]))
        throw new Error();
    const spin = document.getElementById("spin");
    const imgs = ["cherry", "bell", "seven"];
    spin === null || spin === void 0 ? void 0 : spin.addEventListener("click", () => {
        // ボタンを押せるように、押せないように
        spin.classList.add("disabled");
        stop1 === null || stop1 === void 0 ? void 0 : stop1.classList.remove("disabled");
        stop2 === null || stop2 === void 0 ? void 0 : stop2.classList.remove("disabled");
        stop3 === null || stop3 === void 0 ? void 0 : stop3.classList.remove("disabled");
        slots.forEach((slot) => {
            if ("style" in slot && slot.style !== undefined && slot.style !== null)
                slot.classList.remove("opacity");
        });
        // スロットを回す
        intervalId1 = setInterval(() => {
            let randomIdx = Math.floor(Math.random() * 3);
            if ("src" in slots[0])
                slots[0].src = "img/" + imgs[randomIdx] + ".png";
        }, 10);
        intervalId2 = setInterval(() => {
            let randomIdx = Math.floor(Math.random() * 3);
            if ("src" in slots[1])
                slots[1].src = "img/" + imgs[randomIdx] + ".png";
        }, 10);
        intervalId3 = setInterval(() => {
            let randomIdx = Math.floor(Math.random() * 3);
            if ("src" in slots[2])
                slots[2].src = "img/" + imgs[randomIdx] + ".png";
        }, 10);
    });
    // 終了判定
    function finishGame() {
        spin === null || spin === void 0 ? void 0 : spin.classList.remove("disabled");
        slotCount = 0;
        let cherryCnt = 0;
        let bellCnt = 0;
        let sevenCnt = 0;
        slots.forEach((slot) => {
            var _a;
            let imgSrc;
            if ("src" in slot) {
                imgSrc = (_a = slot.src) === null || _a === void 0 ? void 0 : _a.toString();
                if (imgSrc === null || imgSrc === void 0 ? void 0 : imgSrc.includes("cherry"))
                    cherryCnt++;
                if (imgSrc === null || imgSrc === void 0 ? void 0 : imgSrc.includes("bell"))
                    bellCnt++;
                if (imgSrc === null || imgSrc === void 0 ? void 0 : imgSrc.includes("seven"))
                    sevenCnt++;
            }
        });
        const Counts = [cherryCnt, bellCnt, sevenCnt];
        let maxIdx = -1;
        let maxNum = 0;
        let maxNumCnt = 0;
        if (!(Counts[0] === Counts[1]) && !(Counts[1] === Counts[2])) {
            for (let i = 0; i < Counts.length; i++) {
                if (Counts[i] > maxNum) {
                    maxNum = Counts[i];
                    maxIdx = i;
                    maxNumCnt++;
                }
            }
            slots.forEach((slot) => {
                if ("src" in slot && "style" in slot) {
                    if (typeof slot.src === "string") {
                        if (slot.style && !(slot.src.includes(imgs[maxIdx]))) {
                            slot.classList.add("opacity");
                        }
                    }
                }
            });
        }
    }
    // スロットを止める
    stop1 === null || stop1 === void 0 ? void 0 : stop1.addEventListener("click", () => {
        stop1.classList.add("disabled");
        clearInterval(intervalId1);
        slotCount++;
        if (slotCount === 3) {
            finishGame();
        }
    });
    stop2 === null || stop2 === void 0 ? void 0 : stop2.addEventListener("click", () => {
        stop2.classList.add("disabled");
        clearInterval(intervalId2);
        slotCount++;
        if (slotCount === 3) {
            finishGame();
        }
    });
    stop3 === null || stop3 === void 0 ? void 0 : stop3.addEventListener("click", () => {
        stop3.classList.add("disabled");
        clearInterval(intervalId3);
        slotCount++;
        if (slotCount === 3) {
            finishGame();
        }
    });
}
