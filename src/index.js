const block = document.getElementById('gamewindow1');

const styleSwap = [
    `x2`,
    `x4`,
    `x8`,
    `x16`,    
    `x32`,
    `x64`,
    `x128`,
    `x256`,
    `x512`,
    `x1024`,
    `x2048`,
    `x4096`,
    `x9192`,
];

let styleCount = 0;
function firstblock() {
    setInterval(() => {     //интервал засунуть в фор и поменять на таймаут 
        for(let i = 0; i < styleSwap.length; i++) {
            block.innerHTML = styleSwap[i].slice(1);
            block.classList.add(styleSwap[++i]);
            if (i > 0) block.classList.remove(styleSwap[i]);
            if (styleCount == 12) {
                styleCount = 0;
            }
        }
    }, 2000);
}

firstblock();
