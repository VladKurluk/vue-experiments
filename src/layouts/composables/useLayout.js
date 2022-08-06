/* import { ref } from "vue";

export const LAYOUTS = {
  standard: Symbol("standard"),
  auth: Symbol("auth"),
};

const layout = ref(LAYOUTS.standard);

const setLayout = (layoutType) => {
  layout.value = layoutType;
};

export const useLayout = () => {
  return {
    layout,
    setLayout,
    LAYOUTS,
  };
}; */

// Make useLayout with useLayoutFactory
import { useLayoutFactory } from "../helpers/useLayoutFactory.js";

export const LAYOUTS = {
  standard: Symbol("standard"),
  auth: Symbol("auth"),
};

const { useLayout } = useLayoutFactory(LAYOUTS, LAYOUTS.standard);
export { useLayout };
