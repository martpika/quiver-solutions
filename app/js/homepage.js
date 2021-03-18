import {Observer, Carousel} from "./util/utility.js";


// Observers

new Observer(animationElements(".scale-trigger"), "scale-trigger-on").observe();
new Observer(animationElements(".translate-left"), "translate-slide").observe();
new Observer(animationElements(".translate-right"), "translate-slide").observe();
new Observer(animationElements(".translate-up"), "translate-slide").observe();

function animationElements(name) {
    return document.querySelectorAll(name);
}

// Carousel
const testimonialCarousel = document.querySelectorAll(".testimonial [name=carousel]");
new Carousel(testimonialCarousel);