import router from "@/router";
import { gsap } from "gsap";

export const reusables = {
  methods: {
    navTo(destination, tIme) {
      setTimeout(function() {
        router.push(destination);
      }, tIme);
      console.log("navigated to: " + destination);
    },
    fadeTo(destination, referencedObjectToBeFaded) {
      gsap.to(referencedObjectToBeFaded, { opacity: 0 }).then(function() {
        router.push(destination);
      });
      console.log("faded to: " + destination);
    },
  },
};
