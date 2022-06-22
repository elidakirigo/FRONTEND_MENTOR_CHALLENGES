const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const testimonialsCount = document.getElementsByClassName("testimonial").length;
let current = 0;

nextBtn.addEventListener("click", () => {
  let next = current + 1;
  if (current == testimonialsCount - 1) {
    next = 0;
  }
  if (current <= testimonialsCount - 1) {
    const currentTestimonial = document.getElementsByClassName("testimonial")[
      current
    ];
    const nextTestimonial = document.getElementsByClassName("testimonial")[
      next
    ];
    currentTestimonial.classList.add("hide-left");
    currentTestimonial.classList.remove("show");
    nextTestimonial.classList.remove("hide-right");
    nextTestimonial.classList.add("show");
    current = next;
  }
});

prevBtn.addEventListener("click", () => {
  let prev = current - 1;
  if (current == 0) {
    prev = testimonialsCount - 1;
  }
  if (current <= testimonialsCount - 1) {
    const currentTestimonial = document.getElementsByClassName("testimonial")[
      current
    ];
    const prevTestimonial = document.getElementsByClassName("testimonial")[
      prev
    ];
    currentTestimonial.classList.add("hide-right");
    currentTestimonial.classList.remove("show");
    prevTestimonial.classList.remove("hide-left");
    prevTestimonial.classList.add("show");
    current = prev;
  }
});