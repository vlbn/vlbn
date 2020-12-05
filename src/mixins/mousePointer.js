import { gsap } from "gsap";

export const mousePointer = {
  mounted() {
    this.pointersTl = gsap
      .timeline()
      .to(this.$refs.mousePointerA, 0.1, {
        scale: 0,
      })
      .to(this.$refs.mousePointerB, 0, {
        zIndex: "1",
      }, ">")      
      .to(this.$refs.mousePointerB, 0.4, {
        scale: 1.7,
        ease: "bounce",
      }, ">")
      .reverse();

    var x = document.querySelectorAll(".pointer");
    for (let i = 0; i < x.length; i++) {
      x[i].addEventListener("mouseover", this.pointerIn);
      x[i].addEventListener("mouseout", this.pointerOut);
      x[i].addEventListener("click", this.pointerOut);
      x[i].addEventListener("mousedown", this.pointerOut);
    }
  },
  methods: {
    mousePointerAttach(e) {
      gsap.set(this.$refs.mousePointerA, {
        x: e.clientX,
        y: e.clientY,
      });
      gsap.set(this.$refs.mousePointerB, {
        x: e.clientX,
        y: e.clientY,
      });
      gsap.to(this.$refs.mousePointerA, 0.5, {
        x: e.clientX,
        y: e.clientY,
        autoAlpha: 1,
      });
      gsap.to(this.$refs.mousePointerB, 0.9, {
        x: e.clientX,
        y: e.clientY,
        autoAlpha: 1,
      });
    },
    pointerIn() {
      this.pointersTl.play();
    },
    pointerOut() {
      this.pointersTl.reverse();
    },
  },
};
