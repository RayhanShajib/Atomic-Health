import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

AOS.init({
    duration: 900,
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