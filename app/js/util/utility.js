class Observer {
  constructor(target, effect, threshold = 0.50) {
    this.target = target;
    this.effect = effect;
    this.options = {
      threshold: threshold
    };
  }

  observe() {
    const inViewport = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(this.effect, entry.isIntersecting);
      })
    };

    const observer = new IntersectionObserver(inViewport, this.options);
    this.target.forEach(target => {
      observer.observe(target);
    })
  }
}


class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.counter = 0;
    this.startCarousel();
  }

  startCarousel() {
    const carouselPrev = document.querySelector("#carousel-prev");
    const carouselNext = document.querySelector("#carousel-next");
    carouselPrev.addEventListener("click", () => {
      if (this.counter <= 0) {
        this.counter = this.slides.length - 1;
        this.slides[this.counter].checked = true;
      } else {
        this.counter--;
        this.slides[this.counter].checked = true;
      }
    });

    carouselNext.addEventListener("click", () => {
      if (this.counter == this.slides.length - 1) {
        this.counter = 0;
        this.slides[this.counter].checked = true;
      } else {
        this.counter++;
        this.slides[this.counter].checked = true;
      }
    });
  }
}

export {
  Observer,
  Carousel
};