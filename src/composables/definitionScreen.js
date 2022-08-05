import { ref, onMounted, onUnmounted } from "vue";

const SCREEN_SIZES = {
  NOT_SUPPORT: "not support", // <= 319
  MOBILE: "mobile", // <= 767
  TABLET: "tablet", // > 767 && <= 900
  NETBOOK: "netbook", // > 900 && <= 1165
  DESKTOP: "desktop", // > 1165
};

export function useScreenSize(param) {
  console.log(param);
  const windowWidth = ref({
    px: window.innerWidth,
    screenType: SCREEN_SIZES.DESKTOP,
  });

  function update() {
    windowWidth.value.px = window.innerWidth;

    if (windowWidth.value.px <= 319) {
      windowWidth.value.screenType = SCREEN_SIZES.NOT_SUPPORT;
    } else if (windowWidth.value.px <= 767) {
      windowWidth.value.screenType = SCREEN_SIZES.MOBILE;
    } else if (windowWidth.value.px > 767 && windowWidth.value.px <= 900) {
      windowWidth.value.screenType = SCREEN_SIZES.TABLET;
    } else if (windowWidth.value.px > 900 && windowWidth.value.px <= 1165) {
      windowWidth.value.screenType = SCREEN_SIZES.NETBOOK;
    } else {
      windowWidth.value.screenType = SCREEN_SIZES.DESKTOP;
    }
  }

  onMounted(() => window.addEventListener("resize", update));
  onUnmounted(() => window.removeEventListener("resize", update));

  return { windowWidth };
}
