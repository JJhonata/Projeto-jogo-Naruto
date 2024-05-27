const naruto = document.querySelector('.naruto');
const pipe = document.querySelector('.pipe');

const jump = () => {
    naruto.classList.add('jump');

    setTimeout(() => {

        naruto.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const narutoPosition = +window.getComputedStyle(naruto).bottom.replace('px','');

    if (pipePosition <= 150 && pipePosition > 0 && narutoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        naruto.style.animation = 'none';
        naruto.style.bottom = `${narutoPosition}px`;

        naruto.src = './imagens/game-over.png';
        naruto.style.width = '130px'
        naruto.style.marginLeft = '30px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);