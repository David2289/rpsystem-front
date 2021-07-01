import $ from 'jquery'; 
import gsap from 'gsap';


const duration_slide = 8; // duration in secs
const duration_trans = 0.5; // duration in secs

const slides = $('#slider_content #slide');
const bubblesUnder = $('#slider_content #bubble_under');
const bubblesOver = $('#slider_content #bubble_over');

const timeLine1 = gsap.timeline({repeat: -1, delay: 0});
const timeLine2 = gsap.timeline({repeat: -1, delay: duration_slide});
const timeLine3 = gsap.timeline({repeat: -1, delay: duration_slide * 2});
const timeLines = [timeLine1, timeLine2, timeLine3];

/************** SLIDER AUTOMÁTICO **************/
for (var i=0; i<slides.length; i++) {

    var slide = slides[i];
    var slideTitle = $(slide).find('p').eq(0);
    var slideDesc = $(slide).find('p').eq(1);

    timeLines[i].to(slide, {autoAlpha: 1, visibility: 'visible', duration: duration_trans}, 'begin');
    timeLines[i].to(slideTitle, {x: '18%', duration: duration_slide}, 'begin');
    timeLines[i].to(slideDesc, {x: '-10%', duration: duration_slide}, 'begin');
    timeLines[i].to(bubblesOver[i], {autoAlpha:1, visibility:"visible", duration: duration_trans}, 'begin');

    timeLines[i].to(slide, {autoAlpha: 0, visibility: 'hidden', duration: duration_trans}, `begin+=${duration_slide}`);
    timeLines[i].to(slide, {autoAlpha: 0, visibility: 'hidden', duration: (duration_slide * 2 ) - duration_trans}, `begin+=${duration_slide + duration_trans}`); // keeps the slide invisible up to its turn.
    timeLines[i].to(bubblesOver[i], {autoAlpha:0, visibility:"hidden", duration: duration_trans}, `begin+=${duration_slide}`);
}

bubblesUnder.on("click", function() {
    var index = $('#slider_content #bubble_under').index( this ); // return the clicked index
    for (var j = 0; j< slides.length; j++) {
        if (j == index) {
            var timeLine = timeLines[j];
            timeLine.restart();
            setTimeout(function(){
                timeLine.kill();
            }, duration_slide * 1000);
        }
        else {
            timeLines[j].kill();
            gsap.to(slides[j], {autoAlpha: 0, visibility: 'hidden', duration: duration_trans});
            gsap.to(bubblesOver[j], {autoAlpha: 0, visibility: 'hidden', duration: duration_trans});
        }
    }
});