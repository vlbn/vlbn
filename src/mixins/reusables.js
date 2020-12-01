import router from "@/router";
import { gsap } from "gsap";

export const reusables = {
  methods: {
    fadeTo(destination, referencedObjectToBeFaded) {
      gsap.to(referencedObjectToBeFaded, { opacity: 0 }).then(function() {
        router.push(destination);
      });
      console.log("faded to: " + destination);
    },
  },
};
