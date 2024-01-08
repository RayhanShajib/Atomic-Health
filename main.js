import LocomotiveScroll from 'locomotive-scroll';


document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});




const locomotiveScroll = new LocomotiveScroll();

AOS.init({
    duration: 700,
});
const nameAnimationText = new SplitType('#animation')
const nameAnimationText2 = new SplitType('#animation2')
const nameAnimationText3 = new SplitType('#animation3')
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})