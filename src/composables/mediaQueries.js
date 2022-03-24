import { ref } from "vue";

const mediaQueries = () => {
  const mobile = window.matchMedia("(max-width: 428px)");
  const tablet = window.matchMedia(
    "(min-width: 1024px) and (max-width: 1199px)"
  );
  const desktop = window.matchMedia("(min-width: 1200px)");

  const portrait = window.matchMedia("(orientation: portrait)");
  const landscape = window.matchMedia("(orientation: landscape)");

  const orientationIs = ref("");
  const deviceIs = ref("");

  if (mobile.matches) {
    deviceIs.value = "mobile";
  }
  if (tablet.matches) {
    deviceIs.value = "tablet";
  }
  if (desktop.matches) {
    deviceIs.value = "desktop";
  }
  if (portrait.matches) {
    orientationIs.value = "portrait";
  }
  if (landscape.matches) {
    orientationIs.value = "landscape";
  }

  mobile.onchange = (e) => {
    if (e.matches) {
      deviceIs.value = "mobile";
    }
  };

  tablet.onchange = (e) => {
    if (e.matches) {
      deviceIs.value = "tablet";
    }
  };

  desktop.onchange = (e) => {
    if (e.matches) {
      deviceIs.value = "desktop";
    }
  };

  portrait.onchange = (e) => {
    if (e.matches) {
      orientationIs.value = "portrait";
    }
  };

  landscape.onchange = (e) => {
    if (e.matches) {
      orientationIs.value = "landscape";
    }
  };

  return {
    mobile,
    tablet,
    portrait,
    landscape,
    orientationIs,
    deviceIs,
  };
};

export default mediaQueries;
