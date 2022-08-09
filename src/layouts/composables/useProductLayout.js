import { useLayoutFactory } from "../helpers/useLayoutFactory";

export const LAYOUTS = {
  grid: Symbol("grid"),
  list: Symbol("list"),
};

const { useLayout: useProductLayout } = useLayoutFactory(LAYOUTS, LAYOUTS.grid);

export { useProductLayout };
